export default () => {


    const texts = [
        'test1',
        'test2',
        'test3'
    ]

    return texts[Math.floor(Math.random()*texts.length)];

}