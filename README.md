# Buddhist Tour - Interactive Heritage Map

A comprehensive interactive heritage map showcasing Buddhist heritage sites and monuments across India. This project provides an engaging way to explore the rich Buddhist cultural heritage of the country through an interactive SVG map interface.

## 🌟 Features

### Interactive Heritage Map
- **Clickable States**: Interactive SVG map of India where users can click on states to explore Buddhist heritage sites
- **Detailed Information**: Comprehensive details about each heritage site including:
  - Site name and description
  - Historical significance
  - Location details
  - Time period
  - UNESCO status (where applicable)
  - Site type (temple, stupa, cave, monastery, ruins, etc.)

### Responsive Design
- **Mobile-First**: Optimized for mobile devices with touch-friendly interactions
- **Adaptive Layout**: Automatically adjusts map size and interaction methods based on screen size
- **Cross-Platform**: Works seamlessly on desktop, tablet, and mobile devices

### User Experience
- **Desktop Tooltips**: Rich tooltips with detailed site information on desktop
- **Mobile Modals**: Full-screen modals on mobile for better touch interaction
- **Visual Feedback**: Hover effects, state highlighting, and smooth animations
- **Legend**: Clear visual indicators for different types of heritage sites

## 🗺️ Heritage Sites Covered

The map includes Buddhist heritage sites across various Indian states:

### Major Sites
- **Bihar**: Mahabodhi Temple (UNESCO World Heritage), Nalanda, Rajgir, Vaishali
- **Maharashtra**: Ajanta Caves, Ellora Caves, Kanheri Caves (UNESCO World Heritage)
- **Madhya Pradesh**: Sanchi Stupa (UNESCO World Heritage)
- **Uttar Pradesh**: Sarnath, Kapilavastu, Kaushambi
- **Odisha**: Ratnagiri, Dhauli Hills
- **Himachal Pradesh**: McLeodganj, various monasteries
- **Sikkim**: Phodong Monastery
- **Arunachal Pradesh**: Tawang Monastery

### Site Types
- 🕍 **Temples**: Sacred Buddhist temples and shrines
- 🗼 **Stupas**: Ancient Buddhist stupas and monuments
- 🕳️ **Caves**: Rock-cut cave complexes
- ⛩️ **Monasteries**: Buddhist monastic institutions
- 🏺 **Ruins**: Archaeological remains and ancient sites
- 📍 **Sites**: Historical locations and pilgrimage sites

## 🛠️ Technical Implementation

### Frontend Technologies
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development with comprehensive type definitions
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **GSAP**: Advanced animations and scroll-triggered effects

### Map Implementation
- **SVG Map**: High-quality vector map of India with state boundaries
- **Interactive Elements**: Clickable state paths with event handling
- **Responsive Sizing**: Dynamic map sizing based on container and device
- **State Management**: React state for tooltips, modals, and selections

### Data Structure
```typescript
type HeritageSite = {
    name: string;
    description: string;
    historicalSignificance: string;
    location: string;
    type: 'temple' | 'monument' | 'cave' | 'stupa' | 'monastery' | 'ruins' | 'site';
    period: string;
    unescoStatus?: 'World Heritage Site' | 'Tentative List' | 'None';
};
```

## 📱 Mobile Experience

### Touch Interactions
- **Tap to Explore**: Simple tap gestures to open detailed site information
- **Full-Screen Modals**: Immersive modal experience on mobile devices
- **Responsive Layout**: Optimized spacing and typography for small screens
- **Gesture Support**: Touch-friendly interface elements

### Mobile-Specific Features
- **Adaptive Map Size**: Map automatically resizes for mobile screens
- **Simplified Navigation**: Streamlined interaction patterns for touch devices
- **Performance Optimized**: Efficient rendering and smooth animations on mobile

## 🎨 Design Features

### Visual Elements
- **Color Scheme**: Consistent orange theme matching the brand identity
- **Typography**: Clear, readable fonts with proper hierarchy
- **Icons**: Intuitive emoji icons for different site types
- **Shadows**: Subtle shadows and depth for modern UI feel

### Interactive States
- **Hover Effects**: Smooth transitions and visual feedback
- **Selection Highlighting**: Clear indication of selected states
- **Loading States**: Smooth animations and transitions
- **Error Handling**: Graceful fallbacks for edge cases

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Modern web browser with ES6+ support

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd buddhistTour

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

### Build for Production
```bash
# Build the application
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
```

## 📁 Project Structure

```
buddhistTour/
├── src/
│   ├── app/                    # Next.js app directory
│   ├── components/             # React components
│   │   └── locations.tsx      # Interactive heritage map component
│   ├── content-data/           # Data files
│   │   └── heritage-mapping.ts # Heritage site data
│   └── utils/                  # Utility functions
│       └── map.ts             # SVG map data
├── public/                     # Static assets
└── README.md                   # Project documentation
```

## 🔧 Customization

### Adding New Heritage Sites
1. Edit `src/content-data/heritage-mapping.ts`
2. Add new sites to the appropriate state
3. Include all required fields (name, description, etc.)
4. The map will automatically update

### Modifying Map Styles
1. Edit the SVG styling in `src/components/locations.tsx`
2. Adjust colors, transitions, and visual effects
3. Modify the legend and tooltip designs

### Updating Map Data
1. Replace the SVG content in `src/utils/map.ts`
2. Ensure state names match the heritage mapping data
3. Test the interactive functionality

## 🌐 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+

## 📊 Performance

- **Lazy Loading**: Components load only when needed
- **Optimized Rendering**: Efficient SVG manipulation and updates
- **Memory Management**: Proper cleanup of event listeners
- **Responsive Images**: Optimized assets for different screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **UNESCO**: For World Heritage Site information
- **Archaeological Survey of India**: For historical site data
- **Buddhist Community**: For cultural and historical insights
- **Open Source Community**: For the tools and libraries used

## 📞 Support

For questions, issues, or contributions:
- Create an issue on GitHub
- Contact the development team
- Check the documentation

---

**Built with ❤️ for preserving and sharing Buddhist heritage**
