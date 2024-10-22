
// var a=document.createElement('h1')
// var root=document.querySelector('#root')


// a.innerHTML = "helopaul";
// root.appendChild(a)


// React with CDN 
var parent=document.querySelector("#parent")
// Null ke anndr  properties or attribute likhte hai
var h1=React.createElement('h1',null,"HelloRaect")
// ReactDOM
var root=ReactDOM.createRoot(parent)
root.render(h1)

