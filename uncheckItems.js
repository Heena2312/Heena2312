import { Selector } from 'testcafe';

fixture `Requirement 3`
    .page `http://localhost:3000`;

   const titleInput = Selector('.add-item__title-field').find('input')
    const contentInput = Selector('.add-item__content-field').find('textarea')
    const saveButton = Selector('button').withText('SAVE')
    const checkBox = Selector('.todo-item__complete-checkbox').child('input')
    

test ('check uncheck box', async t => {
await t

.typeText(titleInput, 'Heena')
.typeText(contentInput, 'Hiiiii')
.click(saveButton)

.click(checkBox)
.expect(checkBox.checked).ok() 

});



