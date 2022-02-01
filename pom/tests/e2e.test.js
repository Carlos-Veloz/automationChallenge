import formPage from "../pages/FormPage"
import appointmentPage from "../pages/AppointmentPage"
import { URL, TITLES, SUBJECT } from "../data/Constanst"

fixture('E2E test appointment management')
    .page`${URL.LOCAL}`

test('As a user, I should be able to book an appointment', async t => {
    await formPage.fillOut(SUBJECT.PET, SUBJECT.OWNER, SUBJECT.DATE, SUBJECT.TIME, SUBJECT.SYMPTOMS)
    await t.expect(appointmentPage.title.innerText).contains(TITLES.BOOK)
})

test('As a user, I should get an error msg when field are empty', async t=> {
    await t.click(formPage.submitBtn)
    await t.expect(formPage.errorMsg.innerText).contains(TITLES.ERROR_MSG)
})

test('As a user, I should be able to delete an appointment', async t=> {
    await formPage.fillOut(SUBJECT.PET, SUBJECT.OWNER, SUBJECT.DATE, SUBJECT.TIME, SUBJECT.SYMPTOMS)
    await t.click(appointmentPage.deleteBtn)
    await t.expect(appointmentPage.title.innerText).contains(TITLES.EMPTY)
})