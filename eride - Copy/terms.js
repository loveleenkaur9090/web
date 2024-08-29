function showContent() {
    
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    var selectedPolicy = document.getElementById('privacy');
    selectedPolicy.style.display = 'block';
    }