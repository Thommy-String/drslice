const fs = require('fs');
let code = fs.readFileSync('src/components/MetodoSlicePage.jsx', 'utf8');

const regex = /\}\)\}\s*<\/p>\s*<\/div>\s*<\/div>\s*\)\s*\{\/\* ═══════════════ CITAZIONE ═══════════════ \*\/\}/;

code = code.replace(regex, `})}
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
