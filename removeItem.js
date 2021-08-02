import { Selector } from 'testcafe';

fixture `Requirement 2`
    .page `http://localhost:3000`;

    const titleInput = Selector('.add-item__title-field').find('input')
    const contentInput = Selector('.add-item__content-field').find('textarea')
    const saveButton = Selector('button').withText('SAVE')
    const checkBox = Selector('.todo-item__complete-checkbox')  //.nth(1)
    const removeButton = Selector('button').withText('REMOVE') //.nth(1)
    
test ('Remove item when Checkbox is checked', async t => {
    await t
    for(let i=0; i<2;i++){
    await t
    .typeText(titleInput, 'Heena' +i)
    .typeText(contentInput, 'Hiiiii' +i)
    .click(saveButton)

}
    await t
    .click(checkBox)
    .click(removeButton).expect(true).eql(true)
})


//Additional Scenario covered to remove an item at nth index number//

// test ('Remove Items When Checkbox is checked', async t => {
//      await t
     
//      for(let i=0; i<3;i++){
//      await t
//      .typeText(titleInput, 'Heena ' +i)
//      .typeText(contentInput, 'Hiiiii ' +i)
//      .click(saveButton)

// }
//      await t
//      .click(checkBox.nth(1))
//      .click(removeButton.nth(1))
// })
