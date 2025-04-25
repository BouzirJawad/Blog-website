import React from 'react'

function FilterBar({ searchTerm, setSearchTerm, category, setCtegory }) {
    return (
        <div className='mb-4 flex gap-4'>
            <input type='text' placeholder='Search by title or keyword' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='p-2 border rounded' />
            <select name="category" value={formik.values.category} onChange={formik.handleChange} onBlur={formik.handleBlur} className="border p-2 rounded">
                <option value="">All Categories</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Design">Design</option>
            </select>

            {formik.errors.category && formik.touched.category && (
                <p className="text-red-500 text-sm">{formik.errors.category}</p>
            )}

        </div>
    )
}

export default FilterBar
