# Nomad Coder : Making Movie App using react

## 1.6 

- [x] setState를 호출 할 때마다 render()를 호출한다.

- [x] 클래스 컴포넌트로 구성할 때, 반드시 상태의 변수명을 state라고 선언해야하는가? 
    ```javascript
    그런듯 하다. 다음 코드는 ReaComponent 중 setState가     기술되어있는 부분이다.

    setState<K extends keyof S>(
    state: ((prevState: Readonly<S>, propReadonly<P>)   => (Pick<S, K> | S | nu) | (Pick<S, K> | S |      null),
    callback?: () => void
    ): void;
    ``` 


- [x] state를 선언할 떄 var 또는 let으로 형태를 선언하지 않는 이유는? 

    ```javascript
        Unexpected token. A constructor, method, accessor, or property was expected.ts(1068)
    ```

- [ ] class 내부에 있는 메서드는 함수 선언 없이 가능한데, 그 이유는 무엇일까?

- [x] 아래처럼 코드짜지 마쇼

```javascript

    increasecount = () =>{
        this.setState(current => ({count : current.count+1}))
    }
    
    this.state 대신에 current라는 인자를 사용하자.
    react에서 외부의 상태에 의존하지 않는 가장 좋은 방법이래 ( 무슨 소리일까)

```

## LIFE CYCLE

- 리액트가 컴포넌트를 생성하거나 없애는 방법

### Mounting
[마운팅의 의미를 알아보자](https://stackoverflow.com/questions/31556450/what-is-mounting-in-react-js)

```
The main job of React is to figure out how to modify the DOM to match what the components want to be rendered on the screen.

React does so by "mounting" (adding nodes to the DOM), "unmounting" (removing them from the DOM), and "updating" (making changes to nodes already in the DOM).
```

사용되는 메서드

    - constructor() : 자바스크립트에서 클래스 만들 때

    - static getDerivedStateFromProps() --> 수업에서는 안다루니 개인적으로 찾아보기

    constructor에 있는 hello --> render에 있는 hi

    - constructor에 들어가는 props의 정체는 무엇인고
    - super() : 자바에서와 비슷하게 부모 객체를 부르는 역할을 합니다. 다시말해서, super(props)는 부모의 constructor에 props라는 인자를 넣어서 실행하는 것을 의미하는 것이..겠지...?
    
    - componentDidMount() : 컴포넌트가 마운트 되었어! 
        

### Updating
기본적으로 setState를 발생시킬때 나타남

    - componentDidupdate()



### Unmounting

    - componentWillUnmount()


## Fetching Data

- Axios


- 3항연산자 

    ```javascript
    isLoading ? "Loading" :"We are ready"
    isLoading이 true이면 Loading, false이면 뒤에것.
    ```

- 비구조화 할당 (구조 분해)

    ```javascript
        const { isLoading } = this.state

        isLoading을 곧바로 쓸 수 있음
        this.state.isLoading 이렇게 안 써도 된다.

        
        json 구조도 비 구조화 할당 가능
        const {data:{data:{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");

        --> 곧바로 moives 사용 가능

    


    ```    

- 동작 방식

    ```javascript
    componentDidMount(){
      setTimeout(()=>{
        this.setState({isLoading : false});
      },3000);
    }

    render() --> componentDidMount() --> setTimeout() --> setState() --> render()
    ```


## Style Component

오우 쥐엔장...JSX에서 곧바로 style태그를 !

BEM Naming 어떤 컴포넌트에서 무슨 역할을 하는지 ex ) card__title-primary


## PropTypes

얘 확인하기.
genres : PropTypes.arrayOf(PropTypes.string).isRequired

