/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'integralcf-bold': ['IntegralCF-Bold', 'sans'],
        'integralcf-boldoblique': ['IntegralCF-BoldOblique', 'sans'],
        'integralcf-demibold': ['IntegralCF-DemiBold', 'sans'],
        'integralcf-demiboldoblique': ['IntegralCF-DemiBoldOblique', 'sans'],
        'integralcf-extrabold': ['IntegralCF-ExtraBold', 'sans'],
        'integralcf-extraboldoblique': ['IntegralCF-ExtraBoldOblique', 'sans'],
        'integralcf-heavy': ['IntegralCF-Heavy', 'sans'],
        'integralcf-heavyoblique': ['IntegralCF-HeavyOblique', 'sans'],
        'integralcf-medium': ['IntegralCF-Medium', 'sans'],
        'integralcf-mediumoblique': ['IntegralCF-MediumOblique', 'sans'],
        'integralcf-regular': ['IntegralCF-Regular', 'sans'],
        'integralcf-regularoblique': ['IntegralCF-RegularOblique', 'sans'],
      },
      backgroundImage: {
        'login-image': "url('/src/images/Login Background.png')",
        'countdown-bg': "url('/src/images/Countdown Background.png')", 
        'gradient-timer': "linear-gradient(to bottom, #6F1A9B 0%, #0B1461 70%)",
      },
      backgroundColor: {
        'input-translucent': 'rgba(150, 255, 255, 0.1)',
      },
      spacing: {
        '150': '150px', 
      },
    },
  },
  plugins: [],
}

