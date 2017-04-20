const model = {
    "firstNames" : [
        "Gert",
        "Larisa",
        "Usain",
        "Paavo",
        "Aladar",
        "Alan",
        "Sir Steve",
        "Carl",
        "Michael",
        "Ray" 
    ],
    "lastNames" : [
        "Fredriksson",
        "Latynina",
        "Bolt", "Nurmi",
        "Gerevich",
        "Redgrave",
        "Fischer",
        "Lewis",
        "Phelps",
        "Ewry"
    ]
}

const operator = {
    "createOutput" : function() {
        const wrapper = document.getElementById('wrapper');
        wrapper.removeChild(wrapper.lastChild);
        const output = document.createElement('p');
        output.className = 'output';
        output.id = 'outPut';
        wrapper.appendChild(output);
    },
    "evemtListeners" : function() {
        const btn = document.getElementById('btn');
        btn.addEventListener('click', function() {
            operator.createOutput();
        });
    }
}

view = {
    "initDisplay" : function() {
        operator.evemtListeners();
    },
    "putNameInOutput" : function(x) {
        const outPut = document.getElementById('outPut');
        outPut.textContent = x;
        console.log(outPut);
    }
}
view.initDisplay();



// put this in function generating name
// view.putNameInOutput('haha');