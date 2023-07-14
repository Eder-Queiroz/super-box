interface BodyProps {
  children: React.ReactNode;
  colorBg: string;
  colorSvg: string;
}

export default function Body({ children, colorBg, colorSvg }: BodyProps) {
  return (
    <main
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: `${colorBg}`,
        position: "absolute",
        zIndex: -1,
      }}
    >
      <svg
        width="146"
        height="240"
        viewBox="0 0 146 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <ellipse cx="-20" cy="156.5" rx="82" ry="83.5" fill={colorSvg} />
        <ellipse cx="46.5" cy="63.5" rx="99.5" ry="93.5" fill={colorSvg} />
      </svg>
      {children}
      <svg
        width="200"
        height="204"
        viewBox="0 0 200 204"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        <ellipse cx="217.5" cy="204" rx="217.5" ry="204" fill={colorSvg} />
      </svg>
    </main>
  );
}
