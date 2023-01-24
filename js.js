function Header({ showForm, setShowForm }) {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="logo.png"
          height="68"
          width="68"
          alt="Сегодня и изучил лого"
        />
        <h1>I learn</h1>
      </div>

      <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm((show) => !show)}
      ></button>
    </header>
  );
}
