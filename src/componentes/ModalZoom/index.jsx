const ModalZoom = ({ foto }) => {
  return (
    <>
      <dialog open={!!foto}>
        <p>aaaa</p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
};

export default ModalZoom;
