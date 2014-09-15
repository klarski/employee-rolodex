angular.module("MyApp").service("dataService", function(){

	var employeeArray = [{ 
		name:'Kristen',
		phone:'423-394-7407',
		street: '1121 Trumpet Vine Ct',
		city: 'Mableton',
		state: 'GA',
		zipCode: 30126 
	}];


	this.getEmployee = function(){
		var str = localStorage.getItem("NameLS");
		employeeArray = JSON.parse(str) || employeeArray;
		return employeeArray;
	}

	this.addEmployee = function(eName, eNumber, eStreet, eCity, eState, eZip){
		var addEmploy = {
			name: eName, 
			phone:eNumber, 
			street:eStreet, 
			city:eCity, 
			state:eState, 
			zipCode:eZip
		} 

		employeeArray.push(addEmploy);
		var str = JSON.stringify(employeeArray);
		localStorage.setItem("NameLS", str);
	}

	this.removeName = function(pName){
		employeeArray.splice(employeeArray.indexOf(pName),1);
		var str = JSON.stringify(employeeArray);
		localStorage.setItem("NameLS", str);
	}

	console.log(employeeArray)
});