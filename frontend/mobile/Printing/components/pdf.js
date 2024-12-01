import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View, Alert} from 'react-native';
import Pdf from 'react-native-pdf';


const PDFExample = (source) => {

    const [pdfSource, setPdfSource] = useState(null);
    useEffect(() => {
        console.log('Setting PDF Source:', source.source.source);
        const uri = source.source.source;
        setPdfSource({"uri": uri, cache: true});
        console.log('PDF Source:', pdfSource);
    }, []); 
    
    

    return (
        <View style={styles.container}>
            {pdfSource && (
                <Pdf
                    trustAllCerts={false}
                    source={pdfSource}
                    onLoadComplete={(numberOfPages, filePath) => {
                        console.log(`Loaded ${numberOfPages} pages from ${filePath}`);
                    }}
                    onError={(error) => {
                        console.log('PDF Error:', error);
                        Alert.alert('Lỗi', 'Không thể hiển thị PDF');
                    }}
                    style={styles.pdf}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 30,
    },
    pdf: {

        width: Dimensions.get('window').width * 0.7, 
        height: Dimensions.get('window').height * 0.4, 
        alignSelf: 'center', // Căn giữa PDF
    },
});

export default PDFExample;