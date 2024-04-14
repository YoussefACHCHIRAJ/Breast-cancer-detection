export const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.1,
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
    },
};

export const childrenVariants = {
    hidden: {
        y: 30,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            mass: 0.3,
            damping: 10,
        },
    },
};


export const results = {
    M: {
        title: "Positive",
        label: "Cancer Detected",
        text: " Consult a doctor for further evaluation.",
    },
    B: {
        title: "Negative",
        label: "No Cancer Detected",
        text: "Continue regular check-ups for peace of mind.",
    },
};

export const thingsToKeepInMind = [
    {
        title: "Accuracy Disclaimer",
        content: "While our app strives to provide accurate results, it's important to remember that the classification is based on the analysis of images and may not be 100% accurate. Always consult with a medical professional for a confirmed diagnosis."
    },
    {
        title: "Purpose of the App",
        content: "This app is designed to assist users in identifying potential signs of breast cancer in images. It should not be used as a substitute for professional medical advice, diagnosis, or treatment."
    },
    {
        title: "Image Requirements",
        content: "For best results, ensure that the image you provide is clear, well-lit, and focused on the area of concern. Avoid images with excessive noise or artifacts."
    },
    {
        title: "Privacy and Security",
        content: "We take your privacy and the security of your data seriously. Your images are processed locally on your device and are not stored or shared with third parties."
    },
    {
        title: "How to Proceed",
        content: "Once you're ready to start the diagnostic process, click the button below to upload your image. Our app will analyze the image and provide you with the classification result."
    }
];


export const navLinks = [
    {
        content: "Home",
        path: "/",
    },
    {
        content: "Diagnostic",
        path: "/diagnostic",
    },
    {
        content: "about",
        path: "/about",
    },
    {
        content: "Contact",
        path: "/contact",
    },
];


export const models  = [
    {
        label: "model 1 (algorithm: CNN)",
        code: "model_1"
    },
    {
        label: "model 2 (algorithm: EfficientNetV2B2)",
        code: "model_2"
    },
]

export const authors = [
    {
      profile: "youssef.jpg",
      name: "Youssef ACHCHIRAJ",
      email: "youssefachchiraj@gmail.com",
    },
    {
      profile: "houssam.jpeg",
      name: "Houssam eddine NOUMA",
      email: "houssameddinenouma@gmail.com",
    },
  ];