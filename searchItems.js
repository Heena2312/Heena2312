import { Selector } from 'testcafe';

fixture `Requirement 4`
    .page `http://localhost:3000`;

   const titleInput = Selector('.add-item__title-field').find('input')
   const contentInput = Selector('.add-item__content-field').find('textarea')
   const saveButton = Selector('button').withText('SAVE')
   const searchBar = Selector('.toolbar__search-field').find('input')
   const pageDisplay = Selector('.todo-list__pager').find('span')
   const displayTitle = Selector('.todo-item__title') 
   const displayContent = Selector('.todo-item__content')

test ('Search items by name or title', async t => {

for(let i=0; i<2; i++){
await t
.typeText(titleInput, 'Heena ' +i)
.typeText(contentInput, 'Hiiiii ' +i)
.click(saveButton)    
}

if ((searchBar.filter(`{titleInput}`)) || (searchBar.filter(`{contentInput}`)))
await t

 .typeText(searchBar,'Heena') 
  //t.expect( actual ).eql( expected, message, options )
 .expect(displayTitle.innerText).contains('Hee', "Title Matched")
 .expect(displayContent.innerText).contains('Hi', "Content Matched")
 .expect(pageDisplay.innerText).eql('current page: 1')
 
});

