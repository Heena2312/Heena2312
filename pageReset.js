import { Selector } from 'testcafe';

fixture `Requirement 6`
    .page `http://localhost:3000`;

   const titleInput = Selector('.add-item__title-field').find('input')
   const contentInput = Selector('.add-item__content-field').find('textarea')
   const saveButton = Selector('button').withText('SAVE')
   const searchBar = Selector('.toolbar__search-field').find('input')
   const pageDisplay = Selector('.todo-list__pager').find('span')

test ('Page Reset', async t => {

    for(let i = 0; i<21;i++){
    await t
    .typeText(titleInput, 'Heena ' +i)
    .typeText(contentInput, 'Hiiiii ' +i)
    .click(saveButton)    
}

    await t
    .typeText(searchBar, "bcd")   
    .expect(pageDisplay.innerText).contains("current page: 1", "Page has been reset")
   
})

