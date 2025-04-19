import React from 'react';

const Contact = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out to us!</p>
            <form style={{ maxWidth: '400px', margin: '0 auto' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
                    <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                    <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
                    <textarea id="message" name="message" rows="4" style={{ width: '100%', padding: '8px' }}></textarea>
                </div>
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;