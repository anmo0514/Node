const express = require('express');
const res = require('express/lib/response');
const db = require('./../modules/connect-db');
const upload = require('./../modules/upload-imgs');

const router = express.Router();

// 自訂的 middleware
router.use((req, res, next)=>{
    res.locals.shin += ' admin2';
    next();
});


router.get('/myform/:sid', async (req, res)=>{
    const sid = parseInt(req.params.sid) || 0;
    const [rs] = await db.query(`SELECT account,avatar,nickname FROM admins WHERE sid=${sid}`);

    res.json(rs);
});
router.put('/myform/:sid', async ()=>{

});

router.get('/', (req, res)=>{
    res.send('admin2: root');
});

router.get('/abc', (req, res)=>{
    res.json({
        originalUrl: req.originalUrl,
        'locals.shin': res.locals.shin
    });
});
router.get('/def', (req, res)=>{
    res.json({
        originalUrl: req.originalUrl,
        'locals.shin': res.locals.shin
    });
});

router.get('/:p1?/:p2?', (req, res)=>{
    let {
        params,
        url,
        originalUrl,
        baseUrl,
    } = req;

    res.json({
        params,
        url,
        originalUrl,
        baseUrl,
        'locals.shin': res.locals.shin
    });
});

module.exports = router;

