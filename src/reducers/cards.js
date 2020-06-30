const cards = (state, action) => {
    if (state === undefined) {
        return [{
            id: 1,
            tags: ['references'],
            title: 'Pinterest',
            url: 'https://www.pinterest.ru/',
            desc: 'Чаще всего это первый ресурс, на который идут дизайнеры самых разных специализаций в поисках вдохновения. Самое удобная функция на Pinterest — это возможность создавать свои подборки.'
        },{
            id: 2,
            tags: ['references','minimalism','site'],
            title: 'Siiimple',
            url: 'https://siiimple.com/',
            desc: 'Поклонникам минимализма и тем, кто хочет научиться создавать дизайн в этом стиле. На сайте просто огромная подборка примеров дизайна в минималистичном стиле, которая постоянно обновляется.'
        }]
    }
    switch (action.type) {
        default:
            return state.cards;
    }
};

export default cards;