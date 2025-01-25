document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainHeader = document.getElementById('main-header');
    const waitersList = document.getElementById('waiters-list');
    const waiterInfo = document.getElementById('waiter-info');
    const mainFooter = document.getElementById('main-footer');
  
    // Hide splash screen and show main content after 3 seconds
    setTimeout(() => {
      splashScreen.style.display = 'none';
      mainHeader.style.display = 'block';
      waitersList.style.display = 'flex';
      mainFooter.style.display = 'block';
    }, 3000);
  
    const waiters = [
      { name: 'John Doe', age: 28, experience: '5 years', gender: 'Male', performance: 'Excellent', shift: 'Morning', availability: 'Available', image: 'image1.jpg' },
      { name: 'Jane Smith', age: 22, experience: '2 years', gender: 'Female', performance: 'Good', shift: 'Afternoon', availability: 'Busy', image: 'image2.jpg' },
      { name: 'Mark Johnson', age: 35, experience: '10 years', gender: 'Male', performance: 'Outstanding', shift: 'Evening', availability: 'Available', image: 'image3.jpeg' },
      { name: 'Emily Davis', age: 30, experience: '8 years', gender: 'Female', performance: 'Very Good', shift: 'Morning', availability: 'Available', image: 'image4.jpeg' },
      { name: 'James Wilson', age: 25, experience: '3 years', gender: 'Male', performance: 'Good', shift: 'Evening', availability: 'Busy', image: 'image5.jpeg' }
    ];
  
    waiters.forEach(waiter => {
      const waiterCard = document.createElement('div');
      waiterCard.className = 'waiter-card';
      waiterCard.innerHTML = `
        <img src="${waiter.image}" alt="${waiter.name}">
        <h2>${waiter.name}</h2>
        <p>Performance: ${waiter.performance}</p>
        <p>Shift: ${waiter.shift}</p>
        <p>Availability: ${waiter.availability}</p>
      `;
      
      // Adding event listener for displaying detailed info
      waiterCard.addEventListener('click', () => {
        waiterInfo.innerHTML = `
          <div class="waiter-card">
            <img src="${waiter.image}" alt="${waiter.name}">
            <h2>${waiter.name}</h2>
            <p>Age: ${waiter.age}</p>
            <p>Experience: ${waiter.experience}</p>
            <p>Gender: ${waiter.gender}</p>
            <p>Performance: ${waiter.performance}</p>
            <p>Shift: ${waiter.shift}</p>
            <p>Availability: ${waiter.availability}</p>
          </div>
        `;
        waitersList.style.display = 'none';
        waiterInfo.style.display = 'block';
      });
      waitersList.appendChild(waiterCard);
    });
  
    // Adding event listener for returning to the waiters list
    waiterInfo.addEventListener('click', () => {
      waiterInfo.style.display = 'none';
      waitersList.style.display = 'flex';
    });
  });
  