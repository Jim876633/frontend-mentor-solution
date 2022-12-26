export const slideVariants = {
    initial: (x) => ({
        x: 100 * x + "%",
    }),
    animate: {
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
    exit: (x) => ({
        x: -100 * x + "%",
        transition: {
            duration: 0.2,
        },
    }),
};
