import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    
    DetailRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 5,
    },
    
    LeftColumn: {
        flex: 3, 
        paddingRight: 5, 
    },
    
    RightColumn: {
        flex: 2, 
        paddingLeft: 5, 
        //alignItems: 'flex-start', // Căn đều nội dung bên trái
    },
    
    Box: {
        width: 290,
        paddingBottom: 5,
        marginBottom:5,
        borderBottomWidth: 1, // Chỉ hiển thị đường viền dưới
        borderBottomColor: '#000', // Màu của viền
        borderStyle: 'dashed', // Kiểu đường nét đứt
    },    
    scrollContent: {
        paddingHorizontal: 5, // Tạo khoảng cách ngang cho nội dung
        paddingBottom: 10, // Khoảng cách phía dưới khi cuộn
    },  
    PrintDetail:{
        width: 320,
        backgroundColor: '#00C0EF',
        marginTop: 20,
        padding:10,
        borderRadius:10,
    },
    ContainerAsRow: {
        // borderWidth: 2,
        // borderColor: '#000',
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'flex-end', // Đẩy nội dung về bên phải 
        width: 290.
    },
    ContainerAsRow_border: {
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#000',
        paddingLeft: 10,
        height: 50,
        width: 180,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'left', 
    },
    InputContainer: {
        height: 50,
        width: 320,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#000',
        marginTop: 30,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    Icon: {
        height: 25,
        width: 25,
        marginRight: 10,
    },
    textInput: {
        width: "80%",
        height: '90%',
        fontSize: 16,
        padding: 0,
    },
    container: {
        flex: 1,
        backgroundColor: "#6A737B",
        opacity: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
        margin: 10,
        padding: 15,
    },
    container1: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        width: "100%",
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#fff',
    },
    TitleContainer: {
        alignItems: 'center',
        padding: 0,
        marginBottom: 5,
    },
    text0: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'ChakraPetch-Bold',
        color: '#000',
        // alignSelf: 'center',
        textAlign: 'justify'
    },
    text001: {
        fontSize: 16,
        fontWeight: 'regular',
        fontFamily: 'ChakraPetch-Bold',
        color: '#000',
        // alignSelf: 'center',
        textAlign: 'justify'
    },
    text05: {
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'ChakraPetch-Bold',
        color: '#000',
        // alignSelf: 'center',
         textAlign: 'left'
    },
    text051: {
        fontSize: 12,
        fontWeight: 'regular',
        fontFamily: 'ChakraPetch-Bold',
        color: '#000',
        // alignSelf: 'center',
        textAlign: 'justify'
    },
    text1: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'ChakraPetch-Bold',
        color: '#fff',
        alignSelf: 'center',
    },
});
export default styles;