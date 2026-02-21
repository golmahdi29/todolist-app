# 📝 Modern Todo List (Redux-Powered)

A sleek, dark-themed Task Management application built to demonstrate professional state management in a **Vanilla JavaScript** environment using **Redux**. This project showcases how to handle complex UI logic without the need for modern frameworks like React.

![Project Preview](images/screen.pn)

## ✨ Features

* **Predictable State:** Full Redux implementation including Actions, Reducers, and a Centralized Store.
* **Modern UI:** A beautiful dark glassmorphism design featuring high-performance CSS3 gradients and backdrops.
* **Smooth Animations:** Custom keyframe animations for task entry (`pop-in`) and deletion (`swipe-out`).
* **Advanced Filtering:** Real-time task filtering for "All", "Completed", and "Incomplete" statuses.
* **Responsive Design:** Fully optimized for mobile and desktop screens using CSS Flexbox and Media Queries.

## 🛠️ Tech Stack

* **Logic:** Vanilla JavaScript (ES6 Modules).
* **State Management:** [Redux (via CDN)](https://cdnjs.cloudflare.com/ajax/libs/redux/4.2.1/redux.min.js).
* **Styling:** CSS3 (Variables, Gradients, and Animations).
* **Icons:** Font Awesome 5.

## 🏗️ Architecture & Logic

This project follows a strict Redux flow to ensure data integrity:
1.  **Constants:** Defined in `todo.const.js` to maintain a single source of truth for action names.
2.  **Actions:** Dispatched via `todoStore.dispatch()` for adding, removing, and toggling tasks.
3.  **Reducers:** Handle the state transitions based on the dispatched actions.
4.  **DOM Reconciliation:** A manual `reRenderDOM` function subscribes to store changes to update the UI efficiently.

## 🚀 Getting Started

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/golmahdi29/Todolist-app.git](https://github.com/golmahdi29/Todolist-app.git)

Run the App:
Since this uses ES6 Modules, you need to run it via a local server:

If using VS Code, right-click index.html and select "Open with Live Server".

Or use any static server of your choice.

Made with 💜 by Mahdi
