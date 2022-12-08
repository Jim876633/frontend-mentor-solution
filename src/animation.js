export const routerVariants = {
    hidden: {
        x: "50%",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 },
    },
    exit: {
        x: "-50%",
        opacity: 0,
        transition: { duration: 0.5 },
    },
};

export const opacityVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.5 },
    },
};

export const sliderVariants = {
    hidden: {
        x: "30%",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 },
    },
    exit: {
        x: "-30%",
        opacity: 0,
        transition: { duration: 0.5 },
    },
};

export const crewImageVariants = {
    hidden: {
        opacity: 0,
        y: "10%",
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 1 },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.5 },
    },
};
export const techSliderVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1 },
    },
    exit: {
        x: "-30%",
        opacity: 0,
        transition: { duration: 0.5 },
    },
};

export const techImageVariants = {
    hidden: {
        x: "100%",
    },
    visible: {
        x: 0,
        transition: { duration: 0.5, delay: 0.5 },
    },
    exit: {
        x: "100%",
        transition: { duration: 0.5, delay: 0.5 },
    },
};
