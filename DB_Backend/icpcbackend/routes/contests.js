const express = require('express');
const router = express.Router();
const supabase = require('../services/supabase');

router.get('/:id', async (req, res) => {
    const { id } = req.params;  // Extract the contest ID from the URL

    try {
        const { data, error } = await supabase.from('contests')
            .select(`
                id, 
                name, 
                created_at, 
                problems (
                    id, 
                    title, 
                    difficulty, 
                    rank, 
                    test_cases, 
                    created_at, 
                    time_limit, 
                    memory_limit, 
                    description, 
                    sample_input, 
                    sample_output
                )
            `)
            .eq('id', id)  // Filter by contest ID
            .single();  // Get a single result

        if (error) {
            console.error('Contest get by ID error:', error.message);
            return res.status(500).json({ error: error.message });
        }

        if (!data) {
            return res.status(404).json({ error: 'Contest not found' });
        }

        res.status(200).json({ data });
    } catch (err) {
        console.error('Server error:', err.message);
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/', async(req, res) => {
    try {
        const {data, error} = await supabase.from('contests').select(`
            id, 
            name, 
            created_at, 
            problems (
            id, 
            title, 
            difficulty, 
            rank, 
            test_cases, 
            created_at, 
            time_limit, 
            memory_limit, 
            description, 
            sample_input, 
            sample_output
            )
        `)

        if (error) {
            console.error('Contest get error:', error.message);
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json({ data });
    }
    catch(err) {
        console.error('Server error:', err.message);
        res.status(500).json({ error: 'Server error' });
    }

})
router.post('/', async (req, res) => {
    const {name} = req.body;
    if(!name)
      return res.status(400).json({ error: 'Missing required fields' });
    try {
        const { data, error } = await supabase.from('contests').insert([
            {name}
        ]).select().single();

        if (error) {
            console.error('Contest insert error:', error.message);
            return res.status(500).json({ error: error.message });
        }
        res.status(201).json({ message: 'Problem created successfully', data });
    }
    catch(err) {
        console.error('Server error:', err.message);
        res.status(500).json({ error: 'Server error' });
    }
})

module.exports = router;
