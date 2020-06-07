using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PetQuiz.Models;
using System;
using System.Threading.Tasks;

namespace PetQuiz.Controllers
{
    [ApiController]
    public class HighScoreController : Controller
    {
        private readonly ApplicationDbContext db;

        public HighScoreController(ApplicationDbContext db)
        {
            this.db = db;
        }

        // GET: HighScoreController/Create
        [HttpPost]
        [Route("/savescore")]
        public async Task<IActionResult> Create([FromBody] HighScoreRequest request)
        {
            HighScore highscore = new HighScore
            {
                NickName = request.Username,
                Score = request.Score,
                TimePlayed = DateTime.Now
            };
            db.HighScores.Add(highscore);
            int result = await db.SaveChangesAsync();
            if (result > 0)
            {
                return Ok();
            }
            return BadRequest();
        }


        // POST: HighScoreController/Create
        //[HttpPost]
        //[Route("/savescore")]
        //public async Task<IActionResult> Create(IFormCollection collection)
        //{
           
            //try
            //{
            //    return RedirectToAction(nameof(Index));
            //}
            //catch
            //{
            //    return View();
            //}
        }

        // GET: HighScoreController/Edit/5
    //    public ActionResult Edit(int id)
    //    {
    //        return View();
    //    }

    //    // POST: HighScoreController/Edit/5
    //    [HttpPost]
    //    [ValidateAntiForgeryToken]
    //    public ActionResult Edit(int id, IFormCollection collection)
    //    {
    //        try
    //        {
    //            return RedirectToAction(nameof(Index));
    //        }
    //        catch
    //        {
    //            return View();
    //        }
    //    }

    //    // GET: HighScoreController/Delete/5
    //    public ActionResult Delete(int id)
    //    {
    //        return View();
    //    }

    //    // POST: HighScoreController/Delete/5
    //    [HttpPost]
    //    [ValidateAntiForgeryToken]
    //    public ActionResult Delete(int id, IFormCollection collection)
    //    {
    //        try
    //        {
    //            return RedirectToAction(nameof(Index));
    //        }
    //        catch
    //        {
    //            return View();
    //        }
    //    }
    //}
}
