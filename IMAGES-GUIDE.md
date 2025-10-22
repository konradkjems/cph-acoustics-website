# Image Resources Guide for CPH Acoustics Website

## Overview
This guide provides free and paid image resources for the **Projects Page** and **Services Page** of your CPH Acoustics website.

---

## 📸 **Free Stock Photo Sites**

### **1. Unsplash** (https://unsplash.com)
Free, high-quality stock photos with no attribution required.

**Recommended Searches:**
- "audio equipment" - Professional audio gear
- "microphone" - Microphone setup shots
- "headphones" - Consumer audio products
- "circuit board" - PCB and electronics
- "sound wave" - Audio visualization
- "technology" - Modern tech aesthetics
- "Bluetooth speaker" - Wireless audio
- "recording studio" - Professional audio environment

### **2. Pexels** (https://www.pexels.com)
Free stock photos in high quality.

**Recommended Searches:**
- "audio" - Audio-related images
- "electronics" - Electronic components
- "technology" - Tech imagery
- "music production" - Studio environment
- "circuit" - PCB layouts

### **3. Pixabay** (https://pixabay.com)
Millions of free images, vectors, and videos.

**Recommended Searches:**
- "sound" - Audio visualization
- "speaker" - Speaker systems
- "microphone" - Microphone equipment
- "technology" - Tech backgrounds

### **4. Pik Wizard** (https://pikwizard.com)
Free stock images including tech and electronics.

---

## 🎯 **Specific Image Types for Each Service**

### **Services Page - 4 Services**

#### **1. Embedded DSP Development** 🔊
- **Search Terms:** "circuit board", "microprocessor", "signal processing", "electronics"
- **Best From:** Unsplash - "circuit-board" or "motherboard"
- **Dimensions:** 1200x800px recommended

#### **2. Bluetooth Audio Solutions** 📡
- **Search Terms:** "Bluetooth speaker", "wireless audio", "headphones", "connectivity"
- **Best From:** Pexels - "Bluetooth device" or Unsplash - "speaker wireless"
- **Dimensions:** 1200x800px recommended

#### **3. Hardware & PCB Design** ⚡
- **Search Terms:** "PCB design", "circuit board", "electronics components", "soldering"
- **Best From:** Unsplash - "electronics" or "PCB"
- **Dimensions:** 1200x800px recommended

#### **4. Acoustic Engineering** 🎙️
- **Search Terms:** "microphone array", "studio microphone", "recording equipment", "acoustic"
- **Best From:** Pexels - "microphone" or Unsplash - "recording microphone"
- **Dimensions:** 1200x800px recommended

---

## 🎨 **Projects Page - 6 Projects**

### **Current Projects:**
1. Wireless Earbuds DSP
2. Premium Car Audio System
3. Conference Room System
4. Smart Speaker Platform
5. Studio Monitoring System
6. Hearing Enhancement Device

### **Search Recommendations by Project:**

| Project | Search Terms | Best Site |
|---------|-------------|-----------|
| Wireless Earbuds DSP | earbuds, wireless, audio, consumer tech | Unsplash |
| Premium Car Audio System | car audio, automobile, dashboard, infotainment | Pexels |
| Conference Room System | conference room, microphone array, professional audio | Pixabay |
| Smart Speaker Platform | smart speaker, voice assistant, smart home | Unsplash |
| Studio Monitoring System | studio monitor, audio equipment, professional, recording | Pexels |
| Hearing Enhancement Device | hearing aid, audio device, healthcare tech | Pixabay |

---

## 🔗 **Direct Image Links (Unsplash)**

### **DSP & Electronics**
- Circuit Board: https://unsplash.com/search/photos/circuit-board
- Microprocessor: https://unsplash.com/search/photos/microprocessor
- Electronics: https://unsplash.com/search/photos/electronics

### **Audio Equipment**
- Microphone: https://unsplash.com/search/photos/microphone
- Headphones: https://unsplash.com/search/photos/headphones
- Speaker: https://unsplash.com/search/photos/speaker
- Audio Equipment: https://unsplash.com/search/photos/audio-equipment

### **Technology & Innovation**
- Technology: https://unsplash.com/search/photos/technology
- Smart Devices: https://unsplash.com/search/photos/smart-device
- Wireless: https://unsplash.com/search/photos/wireless

---

## 📝 **How to Add Images to Your Website**

### **1. Download Images**
- Choose images from the sites above
- Download in high quality (1200x800px minimum)
- Save to `/public/images/` folder

### **2. Update Services Page** (`app/services/page.tsx`)
Replace placeholder cards with actual images:

```tsx
<Card className="h-64 bg-gradient-to-br from-accent/10 to-accent-secondary/5">
  <Image 
    src="/images/service-dsp.jpg"
    alt="DSP Development"
    fill
    className="object-cover rounded-lg"
  />
</Card>
```

### **3. Update Projects Page** (`app/projects/page.tsx`)
Replace emoji placeholders with images:

```tsx
<div className="h-48 bg-gradient-to-br from-accent/20 to-accent-secondary/10 rounded-lg">
  <Image 
    src="/images/project-earbuds.jpg"
    alt="Wireless Earbuds DSP"
    fill
    className="object-cover rounded-lg"
  />
</div>
```

---

## 💡 **Image Best Practices**

### **File Optimization**
- Use WebP format for better compression
- Keep file size under 500KB
- Optimize for web using tools like TinyPNG or ImageOptim

### **Naming Convention**
```
/public/images/
  ├── service-dsp.jpg
  ├── service-bluetooth.jpg
  ├── service-hardware.jpg
  ├── service-acoustic.jpg
  ├── project-earbuds.jpg
  ├── project-car-audio.jpg
  ├── project-conference.jpg
  ├── project-speaker.jpg
  ├── project-studio.jpg
  └── project-hearing.jpg
```

### **Dimensions**
- Services Cards: 1200x800px (3:2 aspect ratio)
- Project Cards: 600x480px (5:4 aspect ratio)

---

## 🎯 **Quick Action Steps**

1. **Go to Unsplash.com** (https://unsplash.com)
2. **Search for relevant terms** (see recommendations above)
3. **Download high-quality versions**
4. **Create `/public/images/` folder** if not exists
5. **Add images to folder**
6. **Update component code** with image paths
7. **Test on local server** with `npm run dev`

---

## 📊 **Recommended Free Stock Photo Sites (Ranked)**

1. **Unsplash** - Best quality, best for tech/audio
2. **Pexels** - Great variety, very reliable
3. **Pixabay** - Large collection, good for specific searches
4. **Pik Wizard** - Good backup, unique collections

---

## ⚖️ **License Notes**

All recommended sites provide:
- ✅ Free to use commercially
- ✅ No attribution required
- ✅ Can modify/edit images
- ✅ Perfect for websites

Always check individual image licenses before use.

---

## 🚀 **Next Steps**

1. Download 10 images (4 for services, 6 for projects)
2. Optimize images for web
3. Add to `/public/images/` folder
4. Update component files with image paths
5. Test responsive design
6. Deploy to Vercel

Good luck! 🎉
