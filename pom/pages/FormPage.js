import { Selector, t } from "testcafe"

class FormPage {
    constructor () {
        this.title = Selector('h2').withAttribute('data-testid', 'title')
        this.petField = Selector('input').withAttribute('data-testid', 'pet')
        this.ownerField = Selector('input').withAttribute('data-testid', 'owner')
        this.dateField = Selector('input').withAttribute('data-testid', 'date')
        this.timeField = Selector('input').withAttribute('data-testid', 'time')
        this.symptomsField = Selector('textarea').withAttribute('data-testid', 'symptoms')
        this.submitBtn = Selector('button').withAttribute('data-testid', 'btn-submit')
        this.errorMsg = Selector('p').withAttribute('data-testid', 'alert')
    }

    async fillOut (pet, owner, date, time, symptoms) {
        await t.typeText(this.petField, pet, { paste: true })
        await t.typeText(this.ownerField, owner, { paste: true })
        await t.typeText(this.dateField, date, { paste: true })
        await t.typeText(this.timeField, time, { paste: true })
        await t.typeText(this.symptomsField, symptoms, { paste: true })
        await t.click(this.submitBtn)
    }
}

export default new FormPage