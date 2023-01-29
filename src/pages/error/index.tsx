export default function ErrorPage() {
  return (
    <div>
      <h1>Example of catching error in Sentry</h1>
      <button
        type="button"
        onClick={() => {
          throw new Error('Sentry Frontend Error');
        }}
      >
        Throw error
      </button>
    </div>
  );
}
