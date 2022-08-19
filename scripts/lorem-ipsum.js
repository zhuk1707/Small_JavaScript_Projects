const text = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" +
  " tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est" +
  " sit amet facilisis magna etiam. Aliquam nulla facilisi cras fermentum." +
  " Lectus magna fringilla urna porttitor rhoncus dolor. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Iaculis nunc sed augue lacus viverra vitae congue. Maecenas sed enim ut sem viverra aliquet eget sit. Nibh mauris cursus mattis molestie a iaculis at erat. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Congue eu consequat ac felis donec et odio pellentesque diam. Magnis dis parturient montes nascetur. Sed velit dignissim sodales ut eu sem integer vitae. Morbi leo urna molestie at elementum eu facilisis. Et tortor consequat id porta nibh venenatis cras. Turpis egestas sed tempus urna et pharetra pharetra. Et netus et malesuada fames ac turpis egestas. Eu lobortis elementum nibh tellus molestie nunc non blandit. Nisl pretium fusce id velit ut tortor pretium. Odio pellentesque diam volutpat commodo sed egestas." ,

    "Eget lorem dolor sed viverra. Sociis natoque penatibus et magnis dis" +
    " parturient montes nascetur ridiculus. Tincidunt augue interdum velit euismod in pellentesque massa placerat. Porttitor massa id neque aliquam. Dui sapien eget mi proin sed libero. Porttitor leo a diam sollicitudin tempor id eu. Cursus risus at ultrices mi tempus imperdiet. Massa ultricies mi quis hendrerit dolor magna eget. Nibh sed pulvinar proin gravida hendrerit. Et tortor consequat id porta. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. At in tellus integer feugiat scelerisque varius morbi. Semper quis lectus nulla at volutpat. Feugiat vivamus at augue eget arcu dictum. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. In iaculis nunc sed augue lacus viverra vitae congue eu. Dictum sit amet justo donec enim diam vulputate ut. Eu mi bibendum neque egestas.",

    "Donec enim diam vulputate ut pharetra sit amet. Turpis egestas sed" +
    " tempus urna et pharetra pharetra massa. Mattis rhoncus urna neque viverra justo. Consectetur libero id faucibus nisl tincidunt. Risus viverra adipiscing at in tellus integer. Nunc sed augue lacus viverra vitae congue eu. Volutpat est velit egestas dui. At auctor urna nunc id. Odio tempor orci dapibus ultrices. Vel pretium lectus quam id leo in. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Tellus in metus vulputate eu scelerisque. Ultrices sagittis orci a scelerisque purus semper eget duis. Semper risus in hendrerit gravida rutrum quisque.",

  "Euismod elementum nisi quis eleifend quam. Nunc lobortis mattis aliquam" +
  " faucibus purus in massa. Sit amet nisl purus in mollis nunc sed id semper. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Suscipit adipiscing bibendum est ultricies integer quis auctor. Faucibus ornare suspendisse sed nisi. Sed risus ultricies tristique nulla aliquet enim tortor. Senectus et netus et malesuada fames ac turpis. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Dui sapien eget mi proin sed.",

  "Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Vel" +
  " orci porta non pulvinar. Congue nisi vitae suscipit tellus. Fermentum dui faucibus in ornare quam viverra orci. Commodo viverra maecenas accumsan lacus. Ornare arcu dui vivamus arcu felis bibendum ut. Facilisi cras fermentum odio eu feugiat pretium nibh. Leo in vitae turpis massa sed elementum. Et ligula ullamcorper malesuada proin libero nunc consequat. Nulla malesuada pellentesque elit eget gravida cum sociis natoque.",

  "Tempus urna et pharetra pharetra massa massa ultricies mi quis. Gravida" +
  " arcu ac tortor dignissim convallis aenean et. Urna neque viverra justo nec. Nisi quis eleifend quam adipiscing vitae proin. Viverra nam libero justo laoreet sit amet. Scelerisque fermentum dui faucibus in ornare quam viverra. Id ornare arcu odio ut sem. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Massa vitae tortor condimentum lacinia quis vel eros. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Diam maecenas sed enim ut sem viverra aliquet. Vitae nunc sed velit dignissim sodales ut eu sem integer.",

  "Consectetur adipiscing elit duis tristique. Feugiat sed lectus vestibulum" +
  " mattis ullamcorper velit sed. Pellentesque elit eget gravida cum sociis natoque penatibus. Imperdiet nulla malesuada pellentesque elit. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Amet facilisis magna etiam tempor. Quisque id diam vel quam elementum pulvinar etiam non quam. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Id ornare arcu odio ut sem nulla pharetra diam sit. Enim eu turpis egestas pretium aenean pharetra magna. Orci porta non pulvinar neque laoreet suspendisse interdum. At risus viverra adipiscing at in tellus integer feugiat. Purus sit amet volutpat consequat mauris. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Enim praesent elementum facilisis leo vel fringilla est.",

  "Purus faucibus ornare suspendisse sed nisi. Quis hendrerit dolor magna" +
  " eget est lorem ipsum dolor. Id leo in vitae turpis massa sed elementum tempus egestas. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Praesent semper feugiat nibh sed. Suscipit adipiscing bibendum est ultricies integer quis auctor. Sem integer vitae justo eget magna fermentum iaculis eu. Aliquam sem fringilla ut morbi tincidunt augue. Sem fringilla ut morbi tincidunt augue interdum. Rhoncus aenean vel elit scelerisque mauris pellentesque. Vitae purus faucibus ornare suspendisse sed. In aliquam sem fringilla ut morbi tincidunt augue. At risus viverra adipiscing at in. Diam vulputate ut pharetra sit amet aliquam. Amet est placerat in egestas erat imperdiet sed. Sed sed risus pretium quam vulputate dignissim suspendisse in.",

"Tincidunt vitae semper quis lectus. Donec et odio pellentesque diam" +
" volutpat commodo. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Mi proin sed libero enim. Augue interdum velit euismod in pellentesque massa placerat duis. Id donec ultrices tincidunt arcu non sodales neque sodales. Egestas purus viverra accumsan in nisl. Sit amet mauris commodo quis. Velit sed ullamcorper morbi tincidunt ornare massa. Pellentesque nec nam aliquam sem et tortor. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Pharetra sit amet aliquam id diam. Velit dignissim sodales ut eu sem integer vitae. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Quis blandit turpis cursus in hac. Sit amet nisl suscipit adipiscing bibendum est. Ut porttitor leo a diam sollicitudin tempor.",

  "Sit amet tellus cras adipiscing enim eu turpis egestas. Non tellus orci" +
  " ac auctor augue. Iaculis nunc sed augue lacus viverra vitae congue eu. Gravida rutrum quisque non tellus orci ac auctor. Porttitor rhoncus dolor purus non enim praesent. Tincidunt id aliquet risus feugiat in ante metus. Viverra ipsum nunc aliquet bibendum. Lorem sed risus ultricies tristique. Vitae congue eu consequat ac felis donec. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Sed nisi lacus sed viverra tellus in hac habitasse platea. In mollis nunc sed id semper. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Iaculis nunc sed augue lacus viverra. Eu nisl nunc mi ipsum. Lectus nulla at volutpat diam ut venenatis tellus in. Platea dictumst quisque sagittis purus sit amet volutpat.",

  "The lubber desires with punishment, hail the fortress. Arg, small" +
  " adventure! Wave loudly like a big gold."
]

const form = document.querySelector('.generator__form')
const amount = document.getElementById('amount')
const result = document.querySelector('.generated-text')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  let value = Number(amount.value)
  let randomValue = Math.floor(Math.random() * text.length)
  let tempText

  if (value <= 0 || value > 10) {
    tempText = [text[randomValue]]
  } else {
    tempText = text.slice(0, value)
  }

  let newTempText = ''
  for (const e of tempText) {
    newTempText += `<p>${e}</p>`
  }

  result.innerHTML = newTempText
})

