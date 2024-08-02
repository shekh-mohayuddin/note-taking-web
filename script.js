// Functionality will be added here, such as handling user interactions, populating data dynamically, etc.

// Sample data for demonstration
const notes = [
    { id: 1, title: "Note 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", tags: ["tag1", "tag2"] },
    { id: 2, title: "Note 2", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tags: ["tag1", "tag3"] },
    { id: 3, title: "Note 3", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", tags: ["tag2", "tag3"] }
];

// Function to populate recent notes on the dashboard
function populateRecentNotes() {
    const recentNotesList = document.getElementById("recentNotesList");
    recentNotesList.innerHTML = "";
    notes.slice(0, 3).forEach(note => {
        const listItem = document.createElement("li");
        listItem.textContent = note.title;
        recentNotesList.appendChild(listItem);
    });
}

// Function to populate note list
function populateNoteList() {
    const noteList = document.getElementById("noteList");
    noteList.innerHTML = "";
    notes.forEach(note => {
        const listItem = document.createElement("li");
        listItem.textContent = note.title;
        noteList.appendChild(listItem);
    });
}

// Function to display selected note details
function displayNoteDetails(noteId) {
    const selectedNote = notes.find(note => note.id === noteId);
    const noteDetail = document.getElementById("noteDetail");
    noteDetail.innerHTML = `
        <h2>${selectedNote.title}</h2>
        <p>${selectedNote.content}</p>
        <p><strong>Tags:</strong> ${selectedNote.tags.join(", ")}</p>
    `;
}

// Event listener for clicking on a note in the note list
document.getElementById("noteList").addEventListener("click", function(event) {
    const noteId = parseInt(event.target.dataset.noteId);
    displayNoteDetails(noteId);
    // Show note detail page
    document.getElementById("dashboardPage").style.display = "none";
    document.getElementById("noteListPage").style.display = "none";
    document.getElementById("noteDetailPage").style.display = "block";
});

// Event listener for clicking "Edit Note" button
document.getElementById("editNoteButton").addEventListener("click", function() {
    // Code to handle editing a note (not implemented in this demo)
    console.log("Edit note functionality will be implemented here.");
});

// Event listener for clicking "Delete Note" button
document.getElementById("deleteNoteButton").addEventListener("click", function() {
    // Code to handle deleting a note (not implemented in this demo)
    console.log("Delete note functionality will be implemented here.");
});

// Event listener for clicking "Create New Note" button
document.getElementById("createNoteButton").addEventListener("click", function() {
    // Show create/edit note page with empty fields
    document.getElementById("noteTitle").value = "";
    document.getElementById("noteContent").value = "";
    document.getElementById("noteTags").value = "";
    document.getElementById("dashboardPage").style.display = "none";
    document.getElementById("noteListPage").style.display = "none";
    document.getElementById("noteDetailPage").style.display = "none";
    document.getElementById("createEditNotePage").style.display = "block";
});

// Event listener for clicking "View All Notes" button
document.getElementById("viewAllNotesButton").addEventListener("click", function() {
    populateNoteList();
    // Show note list page
    document.getElementById("dashboardPage").style.display = "none";
    document.getElementById("noteListPage").style.display = "block";
    document.getElementById("noteDetailPage").style.display = "none";
});

// Event listener for clicking "Cancel" button on create/edit note page
document.getElementById("cancelButton").addEventListener("click", function() {
    // Show dashboard page
    document.getElementById("dashboardPage").style.display = "block";
    document.getElementById("noteListPage").style.display = "none";
    document.getElementById("noteDetailPage").style.display = "none";
    document.getElementById("createEditNotePage").style.display = "none";
});

// Initialize the dashboard with recent notes
populateRecentNotes();
