info = {
    name: 'Osee Junior',
    social:{
    twitter: '@planetoftheweb',
    youtube: 'youtube.com/planetoftheweb',
    linkedin: 'linkedin.com/planetoftheweb'
    },
   
  }
function listObject(data){
  const $ = document.querySelector.bind(document)
  let output = '<ul>'
  for (const key in data){
    output += `<li><a href="${data[key]}">${key}</a>`
  }
  output +='</ul>'
  $('#output').innerHTML = output
}

listObject(info.social)