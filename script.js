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
        "Bolt",
        "Nurmi",
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
    "getRandomFirstName" : function() {
        const max = (model.firstNames.length - 1);
        return Math.floor(Math.random() * max + 1);
    },
    "getRandomLastName" : function() {
        const max = (model.lastNames.length - 1);
        return Math.floor(Math.random() * max + 1);
    },
    "generateName" : function() {
        var x = this.getRandomFirstName();
        var y = this.getRandomLastName();
        var firstName = model.firstNames[x];
        var lastName = model.lastNames[y];
        var fullName = firstName + " " + lastName;
        view.putNameInOutput(fullName);
    },
    "evemtListeners" : function() {
        const btn = document.getElementById('btn');
        btn.addEventListener('click', function() {
            operator.createOutput();
            operator.generateName();
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
    }
}
view.initDisplay();