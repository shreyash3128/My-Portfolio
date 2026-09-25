import { useInView } from "../hooks/useInView.js";

export default function Reveal({
    as: Tag = "div",
    className = "",
    variant = "up",
    delay = 0,
    children,
    ...rest
}) {

    const { ref, inView } = useInView();

    return (
        <Tag
            ref={ref}
            className={`
        reveal
        reveal-${variant}
        ${inView ? "is-visible" : ""}
        ${className}
      `.trim()}
            style={
                delay
                    ? { transitionDelay: `${delay}ms` }
                    : undefined
            }
            {...rest}
        >
            {children}
        </Tag>
    );
}