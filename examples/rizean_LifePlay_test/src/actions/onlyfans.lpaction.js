const LPAction = require('../../../../src/LPAction')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'onlyfans',
    ACTION_NAME: 'Manage OnlyFans',
    WHERE: 'sexwork',
    WHEN: '0 - 24',
    MINUTES: '120 - 120',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: '',
    CONDITIONS: 'pornfame > 0 (STAT_COMPARE)',
    MOVE_FIRST: false,
    SCENE_ALWAYS: 'onlyfans',
    ANIMATION: 'browse',
})