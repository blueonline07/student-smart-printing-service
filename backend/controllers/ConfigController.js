
class SystemConfigurer {
    constructor() {
        this.distribution_date = {
            day: 1,
            month: 9,
        }
        this.default_pages = 100
    }

    getDistributionDate() {
        return this.distribution_date
    }

    getDefaultPages() {
        return this.default_pages
    }

    setDistributionDate(date) {
        this.distribution_date = date
    }

    setDefaultPages(pages) {
        this.default_pages = pages
    }
}

