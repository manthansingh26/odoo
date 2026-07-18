import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const EyeIcon = ({ open }) => open ? (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
) : (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const CheckCircle = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

// Inject spin keyframes once
if (typeof document !== 'undefined' && !document.getElementById('rf-login-kf')) {
    const s = document.createElement('style');
    s.id = 'rf-login-kf';
    s.textContent = '@keyframes rf-spin { to { transform: rotate(360deg); } }';
    document.head.appendChild(s);
}

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '', remember: false });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const successMessage = location.state?.message;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        if (!formData.email || !formData.password) {
            setErrors({ server: 'Email and password are required' });
            return;
        }
        setLoading(true);
        const result = await login(formData.email, formData.password);
        setLoading(false);
        if (result.success) {
            navigate('/dashboard');
        } else if (result.requiresEmailVerification) {
            navigate('/verify-email', { state: { email: result.email, message: result.message } });
        } else {
            setErrors({ server: result.message });
        }
    };

    const features = [
        'Manage rentals & inventory in real-time',
        'Multi-role: Admin, Vendor & Customer access',
        'Smart invoicing & coupon management',
        'Analytics dashboard & vendor reports',
    ];

    const S = styles;

    return (
        <div style={S.page}>
            {/* ── Left Panel ── */}
            <div style={S.leftPanel}>
                <div style={S.leftContent}>
                    <div style={S.logoRow}>
                        <div style={S.logoIcon}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                            </svg>
                        </div>
                        <span style={S.logoText}>RentFlow</span>
                    </div>

                    <div style={S.leftHeadline}>
                        <h1 style={S.headline}>Your complete<br /><span style={S.headlineAccent}>rental platform</span></h1>
                        <p style={S.headlineSubtitle}>Streamline your rental operations with smart automation, real-time inventory, and actionable insights.</p>
                    </div>

                    <div style={S.featureList}>
                        {features.map((f, i) => (
                            <div key={i} style={S.featureItem}>
                                <span style={S.featureIcon}><CheckCircle /></span>
                                <span style={S.featureText}>{f}</span>
                            </div>
                        ))}
                    </div>

                    <div style={S.statsRow}>
                        {[['500+', 'Products'], ['3 Roles', 'Access Levels'], ['24/7', 'Uptime']].map(([val, lab]) => (
                            <div key={lab} style={S.statItem}>
                                <div style={S.statVal}>{val}</div>
                                <div style={S.statLab}>{lab}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={S.deco1} /><div style={S.deco2} /><div style={S.deco3} />
            </div>

            {/* ── Right Panel ── */}
            <div style={S.rightPanel}>
                <div style={S.formCard}>
                    <div style={S.formHeader}>
                        <h2 style={S.formTitle}>Welcome back</h2>
                        <p style={S.formSubtitle}>Sign in to your account to continue</p>
                    </div>

                    {successMessage && (
                        <div style={S.successBanner}><CheckCircle /> {successMessage}</div>
                    )}
                    {errors.server && (
                        <div style={S.errorBanner}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                            {errors.server}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} style={S.form}>
                        {/* Email */}
                        <div style={S.fieldGroup}>
                            <label style={S.label} htmlFor="rf-email">Email address</label>
                            <div style={S.inputWrapper}>
                                <span style={S.inputIcon}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                </span>
                                <input id="rf-email" type="email" name="email" placeholder="you@example.com"
                                    value={formData.email} onChange={handleChange} required
                                    style={S.input}
                                    onFocus={e => e.target.style.borderColor = '#f97316'}
                                    onBlur={e => e.target.style.borderColor = '#e5e7eb'} />
                            </div>
                        </div>

                        {/* Password */}
                        <div style={S.fieldGroup}>
                            <label style={S.label} htmlFor="rf-password">Password</label>
                            <div style={S.inputWrapper}>
                                <span style={S.inputIcon}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                                </span>
                                <input id="rf-password" type={showPassword ? 'text' : 'password'} name="password"
                                    placeholder="Enter your password" value={formData.password}
                                    onChange={handleChange} required
                                    style={{ ...S.input, paddingRight: '3rem' }}
                                    onFocus={e => e.target.style.borderColor = '#f97316'}
                                    onBlur={e => e.target.style.borderColor = '#e5e7eb'} />
                                <button type="button" style={S.eyeBtn} onClick={() => setShowPassword(s => !s)}>
                                    <EyeIcon open={showPassword} />
                                </button>
                            </div>
                        </div>

                        {/* Options */}
                        <div style={S.optionsRow}>
                            <label style={S.checkboxLabel}>
                                <input type="checkbox" name="remember" checked={formData.remember} onChange={handleChange} style={S.checkbox} />
                                Remember me
                            </label>
                            <Link to="/forgot-password" style={S.forgotLink}>Forgot password?</Link>
                        </div>

                        {/* Submit */}
                        <button type="submit" disabled={loading} style={{ ...S.submitBtn, opacity: loading ? 0.75 : 1 }}>
                            {loading ? (
                                <span style={S.loadingInner}>
                                    <span style={S.spinner} />
                                    Signing in...
                                </span>
                            ) : 'Sign In'}
                        </button>
                    </form>

                    {/* Divider */}
                    <div style={S.divider}>
                        <div style={S.dividerLine} /><span style={S.dividerText}>quick access</span><div style={S.dividerLine} />
                    </div>

                    {/* Quick login buttons */}
                    <div style={S.quickAccess}>
                        <div style={S.quickGrid}>
                            {[
                                { role: 'Admin', email: 'aryansondharva25@gmail.com', pw: 'admin123', color: '#7c3aed' },
                                { role: 'Vendor', email: 'vendor1@rentflow.com', pw: 'vendor123', color: '#0ea5e9' },
                                { role: 'Customer', email: 'customer@rentflow.com', pw: 'customer123', color: '#10b981' },
                            ].map(({ role, email, pw, color }) => (
                                <button key={role} type="button"
                                    style={{ ...S.quickBtn, borderColor: color, color }}
                                    onClick={() => setFormData(p => ({ ...p, email, password: pw }))}
                                    onMouseEnter={e => { e.currentTarget.style.background = color; e.currentTarget.style.color = '#fff'; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = color; }}>
                                    {role}
                                </button>
                            ))}
                        </div>
                    </div>

                    <p style={S.signupText}>
                        Don't have an account?{' '}
                        <Link to="/signup" style={S.signupLink}>Create account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    page: { display: 'flex', minHeight: '100vh', fontFamily: "'Inter', 'Outfit', system-ui, sans-serif" },
    leftPanel: {
        flex: '0 0 48%', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 30%, #4c1d95 60%, #1e3a5f 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
    },
    leftContent: { position: 'relative', zIndex: 2, padding: '3rem', maxWidth: '460px', width: '100%' },
    logoRow: { display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' },
    logoIcon: {
        width: '44px', height: '44px', borderRadius: '12px',
        background: 'linear-gradient(135deg, #f97316, #fb923c)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(249,115,22,0.4)',
    },
    logoText: { fontSize: '1.5rem', fontWeight: '700', color: '#fff', letterSpacing: '-0.02em' },
    leftHeadline: { marginBottom: '2.5rem' },
    headline: { fontSize: '2.4rem', fontWeight: '800', color: '#fff', lineHeight: '1.15', margin: '0 0 1rem', letterSpacing: '-0.03em' },
    headlineAccent: { color: '#fb923c' },
    headlineSubtitle: { fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', lineHeight: '1.6', margin: 0 },
    featureList: { display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' },
    featureItem: { display: 'flex', alignItems: 'center', gap: '0.75rem' },
    featureIcon: { color: '#34d399', flexShrink: 0, display: 'flex' },
    featureText: { color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', fontWeight: '500' },
    statsRow: {
        display: 'flex', gap: '1rem', padding: '1.25rem 1.5rem',
        background: 'rgba(255,255,255,0.08)', borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.12)',
    },
    statItem: { flex: 1, textAlign: 'center' },
    statVal: { fontSize: '1.35rem', fontWeight: '800', color: '#fff' },
    statLab: { fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', marginTop: '0.25rem', fontWeight: '500' },
    deco1: { position: 'absolute', top: '-120px', right: '-120px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(249,115,22,0.12)', zIndex: 1 },
    deco2: { position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(139,92,246,0.15)', zIndex: 1 },
    deco3: { position: 'absolute', top: '40%', right: '5%', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(16,185,129,0.08)', zIndex: 1 },
    rightPanel: { flex: 1, background: '#f9fafb', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' },
    formCard: {
        width: '100%', maxWidth: '440px', background: '#fff',
        borderRadius: '24px', padding: '2.5rem',
        boxShadow: '0 4px 32px rgba(0,0,0,0.07)', border: '1px solid #f0f0f0',
    },
    formHeader: { marginBottom: '1.75rem' },
    formTitle: { fontSize: '1.75rem', fontWeight: '800', color: '#111827', margin: '0 0 0.5rem', letterSpacing: '-0.02em' },
    formSubtitle: { fontSize: '0.95rem', color: '#6b7280', margin: 0 },
    successBanner: { display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#16a34a', padding: '0.75rem 1rem', borderRadius: '10px', fontSize: '0.875rem', marginBottom: '1rem' },
    errorBanner: { display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', padding: '0.75rem 1rem', borderRadius: '10px', fontSize: '0.875rem', marginBottom: '1rem' },
    form: { display: 'flex', flexDirection: 'column', gap: '1.25rem' },
    fieldGroup: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
    label: { fontSize: '0.875rem', fontWeight: '600', color: '#374151' },
    inputWrapper: { position: 'relative' },
    inputIcon: { position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', pointerEvents: 'none' },
    input: {
        width: '100%', paddingLeft: '2.75rem', paddingRight: '1rem',
        paddingTop: '0.8rem', paddingBottom: '0.8rem',
        border: '1.5px solid #e5e7eb', borderRadius: '12px',
        fontSize: '0.95rem', color: '#111827', background: '#fafafa',
        outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box',
    },
    eyeBtn: { position: 'absolute', right: '0.9rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', padding: '0.25rem', display: 'flex', borderRadius: '6px' },
    optionsRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
    checkboxLabel: { display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280', cursor: 'pointer' },
    checkbox: { accentColor: '#f97316', width: '16px', height: '16px' },
    forgotLink: { fontSize: '0.875rem', color: '#f97316', textDecoration: 'none', fontWeight: '600' },
    submitBtn: {
        width: '100%', padding: '0.9rem', borderRadius: '12px', border: 'none',
        background: 'linear-gradient(135deg, #f97316, #fb923c)',
        color: '#fff', fontSize: '1rem', fontWeight: '700', cursor: 'pointer',
        boxShadow: '0 4px 16px rgba(249,115,22,0.35)', letterSpacing: '0.01em',
        transition: 'opacity 0.2s',
    },
    loadingInner: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' },
    spinner: { width: '18px', height: '18px', borderRadius: '50%', border: '2.5px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', animation: 'rf-spin 0.7s linear infinite', display: 'inline-block' },
    divider: { display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '1.5rem 0 1rem' },
    dividerLine: { flex: 1, height: '1px', background: '#e5e7eb' },
    dividerText: { fontSize: '0.75rem', color: '#9ca3af', fontWeight: '500', whiteSpace: 'nowrap' },
    quickAccess: { marginBottom: '1.25rem' },
    quickGrid: { display: 'flex', gap: '0.6rem' },
    quickBtn: { flex: 1, padding: '0.55rem 0.5rem', borderRadius: '10px', border: '1.5px solid', background: 'transparent', fontSize: '0.8rem', fontWeight: '700', cursor: 'pointer', transition: 'all 0.18s' },
    signupText: { textAlign: 'center', fontSize: '0.875rem', color: '#6b7280', marginTop: '1rem', marginBottom: 0 },
    signupLink: { color: '#f97316', fontWeight: '700', textDecoration: 'none' },
};

export default Login;
