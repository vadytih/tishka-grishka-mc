import React from 'react'

const Header: React.FC = () => {
    return (
        <header className="mc-box" style={{
            padding: '2rem 1rem',
            textAlign: 'center',
            marginBottom: '2rem'
        }}>
            <h1 style={{
                color: 'var(--mc-accent)',
                fontSize: '1.4rem',
                letterSpacing: '2px',
                textShadow: '3px 3px 0 var(--mc-border)'
            }}>
                🧱 TISHKAGRISHKA
            </h1>
            <p style={{
                color: 'var(--mc-text-muted)',
                fontSize: '0.7rem',
                marginTop: '0.8rem',
                lineHeight: 1.8
            }}>
                Магнитный конструктор в стиле Minecraft
            </p>
        </header>
    )
}

export default Header

