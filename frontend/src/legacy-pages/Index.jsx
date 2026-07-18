import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Icons
const StarIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
);

const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
    </svg>
);

const Index = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div style={styles.loadingScreen}>
                <div style={styles.spinner}></div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            {/* ── HEADER ── */}
            <header style={styles.header}>
                <div style={styles.navContainer}>
                    <Link to="/" style={styles.logoRow}>
                        <div style={styles.logoIcon}>🥷</div>
                        <span style={styles.logoText}>Tech Assassin</span>
                    </Link>

                    <nav style={styles.navMenu}>
                        <a href="#missions" style={styles.navLink}>Missions</a>
                        <a href="#events" style={styles.navLink}>Events</a>
                        <a href="#about" style={styles.navLink}>About</a>
                        <a href="#hire" style={styles.navLink}>Hire</a>
                    </nav>

                    <div style={styles.headerActions}>
                        {user ? (
                            <Link to="/dashboard" style={styles.btnPrimary}>Dashboard</Link>
                        ) : (
                            <>
                                <Link to="/login" style={styles.btnSecondary}>Login</Link>
                                <Link to="/signup" style={styles.btnPrimary}>Get Started</Link>
                            </>
                        )}
                    </div>
                </div>
            </header>

            {/* ── HERO SECTION ── */}
            <section style={styles.heroSection}>
                <div style={styles.heroBadge}>🎯 From beginner to builder, one mission at a time</div>
                <h1 style={styles.heroTitle}>
                    From <span style={styles.textAccent}>beginner</span> to builder,<br />one mission at a time
                </h1>
                <p style={styles.heroSubtitle}>
                    Collaborate, build real-world software, and kickstart your tech career with real-world developer experience.
                </p>

                <div style={styles.heroButtons}>
                    {user ? (
                        <Link to="/dashboard" style={styles.btnHeroPrimary}>Go to Dashboard →</Link>
                    ) : (
                        <>
                            <Link to="/signup" style={styles.btnHeroPrimary}>Explore Missions</Link>
                            <Link to="/login" style={styles.btnHeroSecondary}>Join Community</Link>
                        </>
                    )}
                </div>

                {/* Hero Illustration Placeholder */}
                <div style={styles.heroImageWrapper}>
                    <img 
                        src="https://picsum.photos/seed/tech-assassin-hero/1200/500.jpg" 
                        alt="Collaborative learning environment" 
                        style={styles.heroImage}
                    />
                    <div style={styles.heroStatsContainer}>
                        <div style={styles.heroStatItem}>
                            <span style={styles.statNumber}>15K+</span>
                            <span style={styles.statLabel}>Builders</span>
                        </div>
                        <div style={styles.heroStatItem}>
                            <span style={styles.statNumber}>40+</span>
                            <span style={styles.statLabel}>Events</span>
                        </div>
                        <div style={styles.heroStatItem}>
                            <span style={styles.statNumber}>2K+</span>
                            <span style={styles.statLabel}>Submissions</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HAPPENING NOW SECTION ── */}
            <section id="events" style={styles.sectionEvents}>
                <div style={styles.sectionHeader}>
                    <span style={styles.sectionSubtitle}>WHAT'S NEXT</span>
                    <h2 style={styles.sectionTitle}>Happening <span style={styles.textAccent}>now</span></h2>
                </div>

                <div style={styles.eventsGrid}>
                    {[
                        { title: 'Developer Match', tag: 'Team Matching', desc: 'Find co-founders, collaborators, and build amazing projects together.', date: 'Live Now', color: '#f87171' },
                        { title: 'Hacker House', tag: 'Build Week', desc: 'A 7-day intense building sprint with mentors and live feedback.', date: 'Starts July 25', color: '#60a5fa' },
                        { title: 'Flutter Jam', tag: 'Hackathon', desc: 'Build premium mobile apps and win cash prizes up to $5,000.', date: 'August 1-3', color: '#34d399' }
                    ].map((evt) => (
                        <div key={evt.title} style={styles.eventCard}>
                            <div style={{ ...styles.eventTag, background: evt.color }}>{evt.tag}</div>
                            <h3 style={styles.eventCardTitle}>{evt.title}</h3>
                            <p style={styles.eventCardDesc}>{evt.desc}</p>
                            <div style={styles.eventCardFooter}>
                                <span style={styles.eventDate}>{evt.date}</span>
                                <Link to="/signup" style={styles.eventLink}>Register →</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── FOUNDER / CALLOUT SECTION ── */}
            <section id="about" style={styles.sectionFounder}>
                <div style={styles.founderGrid}>
                    <div style={styles.founderTextContainer}>
                        <h2 style={styles.founderTitle}>
                            Built by a student,<br />for students who are<br />ready to build.
                        </h2>
                        <p style={styles.founderDesc}>
                            Traditional learning teaches syntax. We teach you how to build actual software, deal with package systems, architecture, and deployment constraints.
                        </p>
                        <ul style={styles.founderList}>
                            <li style={styles.founderListItem}>
                                <CheckIcon /> Real world experience & team dynamics
                            </li>
                            <li style={styles.founderListItem}>
                                <CheckIcon /> Standard project setup & guidelines
                            </li>
                            <li style={styles.founderListItem}>
                                <CheckIcon /> Dedicated peer reviews & mentor feedback
                            </li>
                        </ul>
                    </div>
                    <div style={styles.founderImageContainer}>
                        <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=700" 
                            alt="Student builder" 
                            style={styles.founderImage}
                        />
                    </div>
                </div>
            </section>

            {/* ── INTERACTIVE LOGO FLAG BANNER ── */}
            <section style={styles.flagSection}>
                <div style={styles.flagIconWrapper}>
                    <div style={styles.flagStick}></div>
                    <div style={styles.flagBody}>🥷</div>
                </div>
                <h2 style={styles.flagTitle}>Tech Assassin is <span style={styles.flagUnderline}>unlimited potential</span>.</h2>
            </section>

            {/* ── KEY VALUE PROPS SECTION ── */}
            <section id="missions" style={styles.sectionProps}>
                <div style={styles.propsGrid}>
                    {[
                        { title: 'Your builder profile stays alive', desc: 'Every project, code commit, and contribution is saved to your permanent developer portfolio.', img: 'https://picsum.photos/seed/profile/500/300.jpg' },
                        { title: 'A showcase of serious projects', desc: 'Get reviews and upvotes from senior developers, co-founders, and tech recruiters looking for builders.', img: 'https://picsum.photos/seed/showcase/500/300.jpg' },
                        { title: 'Your portal to build missions', desc: 'Pick up issues, submit PRs, earn rewards, and build actual products used by real users.', img: 'https://picsum.photos/seed/portal/500/300.jpg' }
                    ].map((prop, idx) => (
                        <div key={prop.title} style={{ ...styles.propRow, flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse' }}>
                            <div style={styles.propTextSide}>
                                <h3 style={styles.propTitle}>{prop.title}</h3>
                                <p style={styles.propDesc}>{prop.desc}</p>
                                <Link to="/signup" style={styles.propLink}>Learn more →</Link>
                            </div>
                            <div style={styles.propImgSide}>
                                <img src={prop.img} alt={prop.title} style={styles.propImg} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── TESTIMONIALS SECTION ── */}
            <section style={styles.sectionTestimonials}>
                <span style={styles.sectionSubtitle}>COMMUNITY FEEDBACK</span>
                <h2 style={styles.sectionTitle}>We speak, we listen, we discuss, <span style={styles.textAccent}>we grow</span></h2>

                <div style={styles.testimonialsGrid}>
                    {[
                        { name: 'Aryan Sondharva', role: 'Full Stack Engineer', text: 'Tech Assassin bridged the gap between basic coding tutorials and shipping actual products. Highly recommended!' },
                        { name: 'Karan Patel', role: 'Mobile Developer', text: 'The community, hackathons, and structured guidance keep you motivated. Building alongside other students is fantastic.' }
                    ].map((test) => (
                        <div key={test.name} style={styles.testimonialCard}>
                            <div style={styles.starsRow}>
                                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                            </div>
                            <p style={styles.testimonialText}>"{test.text}"</p>
                            <div style={styles.testimonialUser}>
                                <div style={styles.userInitials}>{test.name[0]}</div>
                                <div>
                                    <div style={styles.userName}>{test.name}</div>
                                    <div style={styles.userRole}>{test.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CALL TO ACTION SECTION ── */}
            <section style={styles.sectionCta}>
                <h2 style={styles.ctaTitle}>Run missions, collect builders, and turn ideas into proof.</h2>
                <div style={styles.ctaButtons}>
                    <Link to="/signup" style={styles.btnCtaPrimary}>Join Tech Assassin</Link>
                    <Link to="/login" style={styles.btnCtaSecondary}>Hire Builders</Link>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <footer style={styles.footer}>
                <div style={styles.footerGrid}>
                    <div>
                        <h3 style={styles.footerBrand}>Tech Assassin</h3>
                        <p style={styles.footerTagline}>Building the next generation of builders.</p>
                    </div>
                    <div style={styles.footerLinksCol}>
                        <h4 style={styles.footerLinkHeader}>Platform</h4>
                        <a href="#missions" style={styles.footerLink}>Missions</a>
                        <a href="#events" style={styles.footerLink}>Events</a>
                        <Link to="/login" style={styles.footerLink}>Join</Link>
                    </div>
                    <div style={styles.footerLinksCol}>
                        <h4 style={styles.footerLinkHeader}>Company</h4>
                        <Link to="/about" style={styles.footerLink}>About</Link>
                        <Link to="/contact" style={styles.footerLink}>Contact</Link>
                    </div>
                </div>
                <div style={styles.footerBottom}>
                    &copy; 2026 Tech Assassin. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: "'Inter', 'Outfit', system-ui, sans-serif",
        color: '#111827',
        background: '#ffffff',
        lineHeight: '1.6',
    },
    loadingScreen: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f9fafb'
    },
    spinner: {
        width: '40px',
        height: '40px',
        border: '3px solid #e5e7eb',
        borderTopColor: '#dc2626',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
    },
    header: {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #f3f4f6',
    },
    navContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logoRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        textDecoration: 'none',
        color: '#111827'
    },
    logoIcon: {
        fontSize: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoText: {
        fontWeight: '800',
        fontSize: '1.25rem',
        letterSpacing: '-0.02em'
    },
    navMenu: {
        display: 'flex',
        gap: '2rem'
    },
    navLink: {
        textDecoration: 'none',
        color: '#4b5563',
        fontWeight: '600',
        fontSize: '0.95rem',
        transition: 'color 0.2s'
    },
    headerActions: {
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
    },
    btnPrimary: {
        textDecoration: 'none',
        background: '#dc2626',
        color: '#ffffff',
        padding: '0.55rem 1.1rem',
        borderRadius: '8px',
        fontWeight: '700',
        fontSize: '0.9rem',
        boxShadow: '0 4px 12px rgba(220,38,38,0.2)',
        transition: 'opacity 0.2s'
    },
    btnSecondary: {
        textDecoration: 'none',
        color: '#111827',
        fontWeight: '700',
        fontSize: '0.9rem',
        padding: '0.55rem 0.8rem'
    },
    heroSection: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '5rem 2rem 4rem',
        textAlign: 'center'
    },
    heroBadge: {
        display: 'inline-block',
        background: '#fee2e2',
        color: '#dc2626',
        padding: '0.4rem 0.9rem',
        borderRadius: '50px',
        fontSize: '0.85rem',
        fontWeight: '700',
        marginBottom: '1.5rem'
    },
    heroTitle: {
        fontSize: '3.6rem',
        fontWeight: '850',
        lineHeight: '1.1',
        letterSpacing: '-0.03em',
        color: '#111827',
        margin: '0 0 1.5rem'
    },
    textAccent: {
        color: '#dc2626'
    },
    heroSubtitle: {
        fontSize: '1.25rem',
        color: '#4b5563',
        maxWidth: '650px',
        margin: '0 auto 2.5rem',
        lineHeight: '1.6'
    },
    heroButtons: {
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        marginBottom: '4rem'
    },
    btnHeroPrimary: {
        textDecoration: 'none',
        background: '#dc2626',
        color: '#ffffff',
        padding: '0.85rem 1.75rem',
        borderRadius: '10px',
        fontWeight: '800',
        fontSize: '1.05rem',
        boxShadow: '0 6px 18px rgba(220,38,38,0.25)',
        transition: 'opacity 0.2s'
    },
    btnHeroSecondary: {
        textDecoration: 'none',
        background: '#ffffff',
        border: '1.5px solid #e5e7eb',
        color: '#4b5563',
        padding: '0.85rem 1.75rem',
        borderRadius: '10px',
        fontWeight: '800',
        fontSize: '1.05rem',
        transition: 'background 0.2s'
    },
    heroImageWrapper: {
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 20px 48px rgba(0,0,0,0.1)'
    },
    heroImage: {
        width: '100%',
        height: 'auto',
        maxHeight: '480px',
        objectFit: 'cover',
        display: 'block'
    },
    heroStatsContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '1.5rem 1rem',
        borderTop: '1px solid rgba(0,0,0,0.06)'
    },
    heroStatItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    statNumber: {
        fontSize: '1.8rem',
        fontWeight: '800',
        color: '#dc2626'
    },
    statLabel: {
        fontSize: '0.85rem',
        color: '#6b7280',
        fontWeight: '600',
        marginTop: '0.25rem'
    },
    sectionEvents: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '6rem 2rem 5rem'
    },
    sectionHeader: {
        marginBottom: '3rem',
        textAlign: 'center'
    },
    sectionSubtitle: {
        fontSize: '0.8rem',
        fontWeight: '800',
        letterSpacing: '0.15em',
        color: '#dc2626',
        display: 'block',
        marginBottom: '0.5rem'
    },
    sectionTitle: {
        fontSize: '2.5rem',
        fontWeight: '800',
        letterSpacing: '-0.02em'
    },
    eventsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
    },
    eventCard: {
        background: '#ffffff',
        border: '1px solid #f3f4f6',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
    },
    eventTag: {
        alignSelf: 'flex-start',
        color: '#ffffff',
        fontSize: '0.75rem',
        fontWeight: '750',
        padding: '0.3rem 0.75rem',
        borderRadius: '50px',
        marginBottom: '1.25rem'
    },
    eventCardTitle: {
        fontSize: '1.35rem',
        fontWeight: '800',
        color: '#111827',
        margin: '0 0 0.75rem'
    },
    eventCardDesc: {
        fontSize: '0.95rem',
        color: '#4b5563',
        marginBottom: '2rem',
        flex: 1
    },
    eventCardFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid #f3f4f6',
        paddingTop: '1.25rem'
    },
    eventDate: {
        fontSize: '0.85rem',
        color: '#6b7280',
        fontWeight: '600'
    },
    eventLink: {
        textDecoration: 'none',
        color: '#dc2626',
        fontWeight: '700',
        fontSize: '0.9rem'
    },
    sectionFounder: {
        background: '#f9fafb',
        padding: '6rem 2rem'
    },
    founderGrid: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: '4rem',
        alignItems: 'center'
    },
    founderTextContainer: {
        paddingRight: '2rem'
    },
    founderTitle: {
        fontSize: '2.8rem',
        fontWeight: '850',
        lineHeight: '1.15',
        letterSpacing: '-0.02em',
        margin: '0 0 1.5rem',
        color: '#111827'
    },
    founderDesc: {
        fontSize: '1.1rem',
        color: '#4b5563',
        lineHeight: '1.65',
        marginBottom: '2.5rem'
    },
    founderList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },
    founderListItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        fontWeight: '600',
        color: '#111827',
        fontSize: '0.95rem'
    },
    founderImageContainer: {
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
    },
    founderImage: {
        width: '100%',
        height: 'auto',
        maxHeight: '460px',
        objectFit: 'cover',
        display: 'block'
    },
    flagSection: {
        textAlign: 'center',
        padding: '5rem 2rem',
        background: '#ffffff',
        borderBottom: '1px solid #f3f4f6'
    },
    flagIconWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '1.5rem'
    },
    flagStick: {
        width: '3px',
        height: '40px',
        background: '#374151'
    },
    flagBody: {
        fontSize: '2rem',
        marginTop: '-5px'
    },
    flagTitle: {
        fontSize: '2.2rem',
        fontWeight: '800',
        color: '#111827'
    },
    flagUnderline: {
        borderBottom: '4px solid #dc2626',
        paddingBottom: '0.2rem'
    },
    sectionProps: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '6rem 2rem 4rem'
    },
    propRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '5rem',
        marginBottom: '5rem'
    },
    propTextSide: {
        flex: 1
    },
    propImgSide: {
        flex: 1,
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 12px 32px rgba(0,0,0,0.05)'
    },
    propImg: {
        width: '100%',
        height: 'auto',
        display: 'block'
    },
    propTitle: {
        fontSize: '2rem',
        fontWeight: '800',
        color: '#111827',
        margin: '0 0 1rem',
        letterSpacing: '-0.02em'
    },
    propDesc: {
        fontSize: '1.05rem',
        color: '#4b5563',
        lineHeight: '1.6',
        marginBottom: '2rem'
    },
    propLink: {
        textDecoration: 'none',
        color: '#dc2626',
        fontWeight: '700',
        fontSize: '0.95rem'
    },
    sectionTestimonials: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '5rem 2rem 6rem',
        textAlign: 'center'
    },
    testimonialsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '2.5rem',
        marginTop: '3.5rem'
    },
    testimonialCard: {
        background: '#ffffff',
        border: '1.5px solid #f3f4f6',
        borderRadius: '20px',
        padding: '2.5rem',
        textAlign: 'left',
        boxShadow: '0 4px 20px rgba(0,0,0,0.015)'
    },
    starsRow: {
        display: 'flex',
        gap: '0.2rem',
        marginBottom: '1.25rem'
    },
    testimonialText: {
        fontSize: '1rem',
        color: '#4b5563',
        lineHeight: '1.6',
        marginBottom: '1.75rem',
        fontStyle: 'italic'
    },
    testimonialUser: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
    },
    userInitials: {
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: '#fee2e2',
        color: '#dc2626',
        fontWeight: '800',
        fontSize: '1.1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    userName: {
        fontWeight: '800',
        fontSize: '0.95rem',
        color: '#111827'
    },
    userRole: {
        fontSize: '0.8rem',
        color: '#6b7280',
        fontWeight: '600'
    },
    sectionCta: {
        background: '#facc15',
        padding: '6rem 2rem',
        textAlign: 'center'
    },
    ctaTitle: {
        fontSize: '2.5rem',
        fontWeight: '850',
        color: '#111827',
        maxWidth: '800px',
        margin: '0 auto 2.5rem',
        lineHeight: '1.15',
        letterSpacing: '-0.02em'
    },
    ctaButtons: {
        display: 'flex',
        gap: '1.25rem',
        justifyContent: 'center'
    },
    btnCtaPrimary: {
        textDecoration: 'none',
        background: '#111827',
        color: '#ffffff',
        padding: '0.95rem 2rem',
        borderRadius: '10px',
        fontWeight: '800',
        fontSize: '1.05rem',
        transition: 'opacity 0.2s'
    },
    btnCtaSecondary: {
        textDecoration: 'none',
        background: '#ffffff',
        color: '#111827',
        padding: '0.95rem 2rem',
        borderRadius: '10px',
        fontWeight: '800',
        fontSize: '1.05rem',
        transition: 'background 0.2s'
    },
    footer: {
        background: '#f9fafb',
        padding: '5rem 2rem 2.5rem',
        borderTop: '1px solid #e5e7eb'
    },
    footerGrid: {
        maxWidth: '1200px',
        margin: '0 auto 3rem',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gap: '4rem'
    },
    footerBrand: {
        fontSize: '1.35rem',
        fontWeight: '850',
        color: '#111827',
        marginBottom: '0.75rem'
    },
    footerTagline: {
        fontSize: '0.95rem',
        color: '#6b7280'
    },
    footerLinksCol: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem'
    },
    footerLinkHeader: {
        fontSize: '0.9rem',
        fontWeight: '800',
        color: '#111827',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginBottom: '0.5rem'
    },
    footerLink: {
        textDecoration: 'none',
        color: '#4b5563',
        fontSize: '0.9rem',
        fontWeight: '600',
        transition: 'color 0.2s'
    },
    footerBottom: {
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '2rem',
        borderTop: '1px solid #e5e7eb',
        textAlign: 'center',
        fontSize: '0.85rem',
        color: '#9ca3af',
        fontWeight: '500'
    }
};

// Inject critical animations once
if (typeof document !== 'undefined' && !document.getElementById('ta-home-kf')) {
    const s = document.createElement('style');
    s.id = 'ta-home-kf';
    s.textContent = `
        @keyframes spin { to { transform: rotate(360deg); } }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap');
    `;
    document.head.appendChild(s);
}

export default Index;
