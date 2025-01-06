import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Import the Footer component
import './App.css'; // Import global styles

function App() {
    return (
        <div className="app"> {/* Added a div with className for global styling */}
            <Header />
            <main> {/* Main content area */}
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer /> {/* Add the Footer component */}
        </div>
    );
}

export default App;