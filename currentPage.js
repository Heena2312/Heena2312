import { Selector } from 'testcafe';

fixture `Requirement 7`
    .page `http://localhost:3000`;

   const titleInput = Selector('.add-item__title-field').find('input')
   const contentInput = Selector('.add-item__content-field').find('textarea')
   const saveButton = Selector('button').withText('SAVE')
   //const searchBar = Selector('.toolbar__search-field').find('input')
   const CurrentPageDisplay = Selector('.todo-list__pager').child('span')

test ('Current Page', async t => {
    await t

    .typeText(titleInput, 'Heena')
    .typeText(contentInput, 'Hiiiii')
    .click(saveButton)    
     await t.expect(CurrentPageDisplay.innerText).eql('current page: 1')
   
});

