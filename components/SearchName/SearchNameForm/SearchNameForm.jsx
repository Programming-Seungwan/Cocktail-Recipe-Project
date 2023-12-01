export default function SearchNameForm({ onSubmitFunc }) {
  return (
    <form onSubmit={onSubmitFunc}>
      <label htmlFor='cocktailName'>입력하고 싶은 칵테일 명</label>
      <input type='text' id='cocktailName' name='cocktailName' />
      <button type='submit'> 검색하기</button>
    </form>
  );
}
