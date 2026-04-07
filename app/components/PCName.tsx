/**
 * Porter/Collins wordmark — used in body copy.
 * Renders the slash in the brand orange so the wordmark visually
 * matches the logo and the Nav/Footer logotypes.
 *
 * Usage:  <>Some sentence about <PCName />.</>
 */
export default function PCName() {
  return (
    <>
      Porter<span className="text-accent-500">/</span>Collins
    </>
  );
}
