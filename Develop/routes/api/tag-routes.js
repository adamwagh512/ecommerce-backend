const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  Tag.findAll().then((allTags) => {
    res.json(allTags)
  })
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
    Tag.findByPk(req.params.id).then((tagData) => {
      res.json(tagData)
    })
  // be sure to include its associated Product data
});

// create a new tag
//tested and working
router.post('/', async (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  }).then((newTag) => {
    res.json(newTag);
  })
  .catch((err) => {
    res.json(err);
  })
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      id: req.body.id,
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      },
    }
  )
  .then((updatedTag) => {
    res.json(updatedTag);
  })
  .catch((err) => {
    res.json(err);
  })
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    },
  })
  .then((destroyedTag) => {
    res.json(destroyedTag)
  })
  .catch((err) => res.json(err))
});

module.exports = router;
