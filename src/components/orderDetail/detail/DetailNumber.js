function DetailNumber({ content }) {
  return (
    <>
      {content.map((v, i) => {
        return (
          <h4 key={v.orId} className="fw-bold text-center">
            訂單編號 : {v.orId}
          </h4>
        );
      })}
    </>
  );
}
export default DetailNumber;
