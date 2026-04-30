const fs = require('fs');
let code = fs.readFileSync('src/components/MetodoSlicePage.jsx', 'utf8');

const regex = /\{scene\.parts\.map\(\(p, j\) =>[\s\S]*?\}\)\}\s*<\/p>\s*<\/div>\s*<\/div>\s*\)\s*\}\)\}\s*<\/div>\s*<\/div>\s*<\/section>\s*\{\/\* ═══════════════ CITAZIONE ═══════════════ \*\/\}/;

code = code.replace(regex, `{scene.parts.map((p, j) =>
                                    typeof p === 'string'
                                      ? <React.Fragment key={j}>{p}</React.Fragment>
                                      : <strong key={j} className='text-white font-bold'>{p.b}</strong>
                                  )}
                                </p>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                    </>
                  )}
                </div>
              </div>
            </React.Fragment>
          ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CITAZIONE ═══════════════ */}`);

fs.writeFileSync('src/components/MetodoSlicePage.jsx', code);
