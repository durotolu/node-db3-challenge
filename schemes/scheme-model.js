const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    //addStep,
    update,
    remove
};

function find() {
    return db('schemes');
};

function findById(id) {
    return db('schemes').where({ id }).first();
};

function findSteps(id) {
    return db('steps as st')
        .join('schemes as sc', 'sc.id', 'st.step_number')
        .select('st.id', 'st.step_number', 'st.instructions', 'sc.scheme_name')
        .where({ 'sc.id': id });
};

function add(scheme) {
    return db('schemes')
        .insert(scheme)
        .then(([id]) => findById(id));
};

// function addStep(stepData, id) {
//     return db('steps')
//         .insert(stepData)
//         .where({ id })
//         .then(([id]) => findSteps(id));
// }

function update(changes, id) {
    return db('schemes').update(changes).where({ id })
        .then(count => (count > 0 ? findById(id) : null));
}

function remove(id) {
    // db('schemes').where({ id }).first()
    //     .then(scheme => res.json(scheme));
    //console.log(findById(id));
    return db('schemes').where('id', id).del()
        //.then(count => (count > 0 ? result : null));
}