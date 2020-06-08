using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using PetQuiz.Models;
using System;
using System.Collections.Generic;
using System.Linq;
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

        [HttpGet]
        [Route("/getHS")]
        public async Task<ActionResult<String>> Get()
        {
            var userScore = await db.HighScores.OrderByDescending(m => m.Score)
                .ThenByDescending(m => m.TimePlayed)
                .Select(m => new { m.NickName, m.Score, m.TimePlayed })
                .ToListAsync();
            var jsonRespons = JsonConvert.SerializeObject(userScore);
            return Ok(jsonRespons); ;
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
