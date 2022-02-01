import { Selector, t } from "testcafe"

class AppointmentPage {
    constructor () {
        this.title = Selector('h2').withAttribute('data-testid', 'dynamic-title')
        this.div = Selector('div').withAttribute('data-testid', 'appointment')
        this.deleteBtn = Selector('button').withAttribute('data-testid', 'btn-delete')
    }
}

export default new AppointmentPage