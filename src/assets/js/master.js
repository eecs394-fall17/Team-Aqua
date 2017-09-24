// JavaScript source code

var talking;
var userId;

var database = firebase.database();
var groupRef = database.ref('groups');

/**
Should create a random group id and then call writeGroupData
*/
function createGroup(length) {
    var newId = groupRef.push();
    writeGroupData(newId, 1, length, length);
}
/**
Should write a new group to the firebase database
*/
function writeGroupData(groupId, gSize, mLength, gTalkTime) {
    firebase.database().ref('groups/' + groupId).set({
        groupSize: gSize,
        meetingLength: mLength,
        goalTalkTime: gTalkTime
    });
}
/**
Should add to the correct group's groupSize and modify goalTalkTime
*/
function addToGroup(gId,userId) {
    database.ref('groups/' + gId).set({ groupSize: groupSize++, goalTalkTime: goalTalkTime / groupSize });
    database.ref('users/' + userId).set({ groupId: gId });

}