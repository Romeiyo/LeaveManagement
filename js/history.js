import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6ufr9SsUFzsizqMUP-YvAh7LJGLuuERs",
    authDomain: "leave-management-90278.firebaseapp.com",
    projectId: "leave-management-90278",
    storageBucket: "leave-management-90278.firebasestorage.app",
    messagingSenderId: "572060224001",
    appId: "1:572060224001:web:b41c49d70cd42ab153ce00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Function to fetch leave history from Firestore
async function fetchLeaveHistory() {
    const loadingMessage = document.getElementById('loadingMessage');
    const errorMessage = document.getElementById('errorMessage');
    const tableWrapper = document.getElementById('tableWrapper');
    const noDataMessage = document.getElementById('noDataMessage');
    const tableBody = document.getElementById('tableBody');

    try {
        console.log('Fetching leave history...');
        
        // Fetch all documents from the leaveHistory collection
        // Change 'leaveHistory' to your actual collection name if different
        const leaveHistoryRef = collection(db, 'leaveHistory');
        const querySnapshot = await getDocs(leaveHistoryRef);

        console.log('Query completed. Documents found:', querySnapshot.size);
        
        loadingMessage.style.display = 'none';

        if (querySnapshot.empty) {
            console.log('No documents found in leaveHistory collection');
            noDataMessage.style.display = 'block';
            return;
        }

        tableWrapper.style.display = 'block';
        tableBody.innerHTML = '';

        querySnapshot.forEach((doc) => {
            console.log('Document data:', doc.EmployeeNumber, doc.data());
            const data = doc.data();
            const row = createTableRow(data);
            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error('Error fetching leave history:', error);
        console.error('Error code:', error.code);
        console.error('Error message:', error.message);
        
        loadingMessage.style.display = 'none';
        errorMessage.textContent = 'Error loading leave history: ' + error.message;
        errorMessage.style.display = 'block';
    }
}

// Function to create table row
function createTableRow(data) {
    const row = document.createElement('tr');
    
    const statusClass = data.status ? data.status.toLowerCase() : 'pending';
    
    row.innerHTML = `
        <td>${data.employeeNumber || data.EmployeeNumber || 'N/A'}</td>
        <td>${data.employeeName || data.EmployeeName || data.FullName || 'N/A'}</td>
        <td>${data.amountOfDays || data.numberOfDays || data.days || 'N/A'}</td>
        <td>${data.typeOfLeave || data.leaveType || data.Type || 'N/A'}</td>
        <td><span class="status ${statusClass}">${data.status || data.Status || 'Pending'}</span></td>
    `;
    
    return row;
}

// Load data when page loads
window.addEventListener('DOMContentLoaded', fetchLeaveHistory);